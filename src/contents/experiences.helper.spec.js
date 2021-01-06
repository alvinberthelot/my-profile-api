const {
  mapExperience,
  computeScores,
  computeTagsByStacks,
} = require("./experiences.helper")

const tagsEmpty = []
const stacksEmpty = []

const tagsNotEmpty = ["html", "css3", "angularjs"]
const stacksNotEmpty = [
  {
    key: "web",
    values: [
      {
        key: "html",
        values: ["html5", "awd", "rwd", "pwa"],
      },
      {
        key: "css",
        values: ["css3", "sass", "bootstrap"],
      },
      {
        key: "javascript",
        values: ["rxjs", "lodash", "jquery"],
      },
    ],
  },

  {
    key: "spa",
    values: [
      {
        key: "typescript",
        values: ["angular", "ngrx", "vue3"],
      },
      {
        key: "javascript",
        values: ["angularjs", "knockoutjs"],
      },
    ],
  },

  {
    key: "mobile",
    values: [
      {
        key: "hybrid",
        values: ["ionic", "phonegap"],
      },
      {
        key: "android",
        values: [],
      },
      {
        key: "ios",
        values: [],
      },
    ],
  },
]

describe(`GIVEN computeTagsByStacks`, () => {
  describe(`WHEN stacks are not empty`, () => {
    const stacks = stacksNotEmpty
    test(`THEN output should be returned`, () => {
      const output = {
        web: [
          { value: "html", score: 4 },
          { value: "html5", score: 1 },
          { value: "awd", score: 1 },
          { value: "rwd", score: 1 },
          { value: "pwa", score: 1 },
          { value: "css", score: 3 },
          { value: "css3", score: 1 },
          { value: "sass", score: 1 },
          { value: "bootstrap", score: 1 },
          { value: "javascript", score: 3 },
          { value: "rxjs", score: 1 },
          { value: "lodash", score: 1 },
          { value: "jquery", score: 1 },
        ],
        spa: [
          { value: "typescript", score: 3 },
          { value: "angular", score: 1 },
          { value: "ngrx", score: 1 },
          { value: "vue3", score: 1 },
          { value: "javascript", score: 2 },
          { value: "angularjs", score: 1 },
          { value: "knockoutjs", score: 1 },
        ],
        mobile: [
          { value: "hybrid", score: 2 },
          { value: "ionic", score: 1 },
          { value: "phonegap", score: 1 },
          { value: "android", score: 1 },
          { value: "ios", score: 1 },
        ],
      }
      expect(computeTagsByStacks(stacks)).toEqual(output)
    })
  })
})

describe(`GIVEN computeScores`, () => {
  describe(`WHEN experience has no tags`, () => {
    const tags = tagsEmpty
    describe(`AND stacks are empty`, () => {
      const stacks = stacksEmpty
      test(`THEN output should be empty`, () => {
        const output = {
          labels: [],
          values: [],
        }
        expect(computeScores(stacks, tags)).toEqual(output)
      })
    })
    describe(`AND stacks are not empty`, () => {
      const stacks = stacksNotEmpty
      test(`THEN output should return labels with 0 values`, () => {
        const output = {
          labels: ["web", "spa", "mobile"],
          values: [0, 0, 0],
        }
        expect(computeScores(stacks, tags)).toEqual(output)
      })
    })
  })

  describe(`WHEN experience has tags`, () => {
    const tags = tagsNotEmpty
    describe(`AND stacks are empty`, () => {
      const stacks = stacksEmpty
      test(`THEN output should be empty`, () => {
        const output = {
          labels: [],
          values: [],
        }
        expect(computeScores(stacks, tags)).toEqual(output)
      })
    })
    describe(`AND stacks are not empty`, () => {
      const stacks = stacksNotEmpty
      test(`THEN output should return labels with 0 values`, () => {
        const output = {
          labels: ["web", "spa", "mobile"],
          values: [5, 1, 0],
        }
        expect(computeScores(stacks, tags)).toEqual(output)
      })
    })
  })
})

describe(`GIVEN mapExperience`, () => {
  describe(`WHEN`, () => {
    test(`THEN`, () => {
      // expect(getExperiences()).toBe(42)
    })
  })
})
