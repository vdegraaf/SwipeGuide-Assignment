const { comments, categories } = require('./data')

const wordChecker = (comments, categories) => {

  comments.map((comment) => {
    const commentLength = comment.length
    const commentWordArr = comment.toLowerCase().split(' ')

    console.log(comment)

    for (let [categoryName, words] of Object.entries(categories)) {
      let lettersMatching = 0

      words.map(word => {
        commentWordArr.map(str => {
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

wordChecker(comments, categories)

module.exports = wordChecker;