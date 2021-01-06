const { getTagLabel } = require("./tags")
const { identifier } = require("safe-identifier")
const { flatten } = require("lodash")

const computeTagsByStacks = (stacks) => {
  return stacks.reduce((acc, stack) => {
    return {
      ...acc,
      [stack.key]: flatten(
        stack.values.map((substack) => [
          {
            value: substack.key,
            score: substack.values.length ? substack.values.length : 1,
          },
          ...substack.values.map((knowledge) => ({
            value: knowledge,
            score: 1,
          })),
        ])
      ),
    }
  }, {})
}

const computeScores = (stacks, tags) => {
  const tagsByStack = computeTagsByStacks(stacks)
  return stacks.reduce(
    (acc, stack) => {
      const score = (tags ? tags : []).reduce((accScore, tag) => {
        const tagFound = tagsByStack[stack.key].find((v) => v.value === tag)
        return accScore + (tagFound ? tagFound.score : 0)
      }, 0)
      return {
        labels: [...acc.labels, getTagLabel(stack.key)],
        values: [...acc.values, score],
      }
    },
    {
      labels: [],
      values: [],
    }
  )
}

const mapExperience = (experience, levels) => {
  const stacks = levels.reduce((acc, v) => [...acc, ...v.values], [])
  return {
    ...experience,
    id: identifier(experience.company + experience.dateBegin),
    tags: experience.tags
      ? experience.tags.map((tag) => ({
          tag,
          wording: getTagLabel(tag),
        }))
      : [],
    scores: computeScores(stacks, experience.tags),
  }
}

module.exports = {
  computeTagsByStacks,
  computeScores,
  mapExperience,
}
