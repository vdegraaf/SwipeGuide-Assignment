const wordChecker = require('./index')

jest.spyOn(console, 'log')

test("if example assigment passes", () => {

  const comments = ["The quick brown fox jumps over the lazy dog"]
  const categories = {
    A: ["quick", "jump"],
    B: ["fox", "dog"],
    C: ["lazy", "slow"],
    D: ["brown", "back", "orange"],
  }

  expect(console.log.mock.calls.length).toBe(0)
  wordChecker(comments, categories)
  expect(console.log.mock.calls.length).toBe(5)
  expect(console.log.mock.calls[1][0]).toMatch("20.93")
  expect(console.log.mock.calls[2][0]).toMatch("13.95")
  expect(console.log.mock.calls[3][0]).toMatch("9.30")
  expect(console.log.mock.calls[4][0]).toMatch("11.63")
})

test("if the number of console logs is right", () => {
  const comments = ["Simple work you have here."]
  const categories = {
    A: ["makes", "jump"],
    B: ["SwipeGuide", "Junior Developer"]
  }

  expect(console.log.mock.calls.length).toBe(0)
  wordChecker(comments, categories)
  expect(console.log.mock.calls.length).toBe(3)
})

test("if 'It makes me laugh...' passes correctly", () => {
  const comments = ["It makes me laugh..."]
  const categories = {
    A: ["makes", "jump"]
  }

  wordChecker(comments, categories)
  expect(console.log.mock.calls[1][0]).toMatch("25.00")
})

test("if capital insensitive", () => {
  const comments = ["I like your shapes :-)"]
  const categories = {
    A: ["i", "like"]
  }

  wordChecker(comments, categories)
  expect(console.log.mock.calls[1][0]).toMatch("27.27")
})

test("if substring of words work", () => {
  const comments = ["Love your shot mate"]
  const categories = {
    A: ["lov"]
  }

  wordChecker(comments, categories)
  expect(console.log.mock.calls[1][0]).toMatch("15.79")
})

test("if mulptiple comments work", () => {
  const comments = ["Love your shot mate",  "Just fresh.",  "Excellent atmosphere m8"]
  const categories = {
    A: ["love"],
    B: ["Just"],
    C: ["Excellent"]
  }

  wordChecker(comments, categories)
  expect(console.log.mock.calls[1][0]).toMatch("21.05")
  expect(console.log.mock.calls[6][0]).toMatch("36.36")
  expect(console.log.mock.calls[11][0]).toMatch("39.13")
})


afterEach(() => {
  jest.clearAllMocks()
})