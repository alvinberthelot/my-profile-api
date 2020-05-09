const { getTagLabel } = require("./tags")
const { levels } = require("./levels")

const getContent = () => {
  const content = Object.keys(levels).map((keyAggregate) => {
    const aggregate = levels[keyAggregate]
    const keyStacks = Object.keys(aggregate)
    return {
      title: getTagLabel(keyAggregate),
      stacks: keyStacks.map((keyStack) => {
        const stack = aggregate[keyStack]
        const keySubStacks = Object.keys(stack)
        return {
          title: getTagLabel(keyStack),
          substacks: keySubStacks.map((keySubStack) => {
            console.log("keySubStack", keySubStack)
            const keyKnowledges = stack[keySubStack]
            console.log("keyKnowledges", keyKnowledges)
            return {
              title: getTagLabel(keySubStack),
              knowledges: keyKnowledges.map((keyKnowledge) =>
                getTagLabel(keyKnowledge)
              ),
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
