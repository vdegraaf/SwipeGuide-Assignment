const { comments, categories } = require('./data')

const wordChecker = (comments, categories) => {
  comments.map((comment) => {
    console.log(comment)

    for (let [categoryName, words] of Object.entries(categories)) {
      let lettersMatching = 0

      words.map(word => {
        if(comment.toLowerCase().includes(word.toLowerCase())) {
          lettersMatching += word.length
        }
      })

      const categoryScore = ((lettersMatching / comment.length) * 100).toFixed(2)   
      console.log(`${categoryName} [${words}] = ${categoryScore}%`)
    }
  })
}

wordChecker(comments, categories)

module.exports = wordChecker
