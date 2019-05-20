const wordChecker = (comments, categories) => {

  comments.map((comment, i) => {

    let commentLength = comment.length
    let commentArr = comment.toLowerCase().split(' ')
    console.log(comment)
    for (let [key, value] of Object.entries(categories)) {

      let wordLength = 0

      value.map(word => { 
        commentArr.map(str => {
          if(str.includes(word)) {
    
            wordLength += word.length
            
          }
        })
      })
      
      let categoryScore = ((wordLength/commentLength)*100).toFixed(2)

      console.log(`${key} [${value}] = ${categoryScore}%`)
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

wordChecker(comments, categories)