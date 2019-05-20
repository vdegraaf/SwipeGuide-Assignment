const { comments2, categories2 } = require('./data')

const wordChecker = (comments, categories) => {

  comments.map((comment) => {

    console.log(comment)

    let commentLength = comment.length
    let commentArr = comment.toLowerCase().split(' ')

    for (let [categoryName, words] of Object.entries(categories)) {

      let lettersMatching = 0

      words.map(word => {
        commentArr.map(str => {
          if (str.includes(word.toLowerCase())) {

            lettersMatching += word.length

          }
        })
      })

      let categoryScore = ((lettersMatching / commentLength) * 100).toFixed(2)

      console.log(`${categoryName} [${words}] = ${categoryScore}%`)
    }
  })

}

const comments = ["The quick brown fox jumps over the lazy dog"]

const categories = {
  A: ["quick", "jump"], // = 20.93%
  B: ["fox", "dog"], // = 13.95%
  C: ["lazy", "slow"], // = 9.3%
  D: ["brown", "back", "orange"], // = 11.62%
}

wordChecker(comments2, categories2)