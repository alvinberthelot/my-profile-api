const { getTagLabel } = require("./tags")
const { levels } = require("./levels")

const getContent = () => {
  const content = levels.map((aggregate) => {
    const stacks = aggregate.values
    return {
      title: getTagLabel(aggregate.key),
      stacks: stacks.map((stack) => {
        const subStacks = stack.values
        return {
          title: getTagLabel(stack.key),
          substacks: subStacks.map((subStack) => {
            const knowledges = subStack.values
            return {
              title: getTagLabel(subStack.key),
              knowledges: knowledges.map((knowledge) => getTagLabel(knowledge)),
            }
          }),
        }
      }),
    }
  })
  return content
}

module.exports = {
  getTechnicalSkills: getContent,
}
