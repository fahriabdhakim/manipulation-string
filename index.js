// LEVEL 0

const sentenceA = "Hello World"
const sentenceB = "Good Bye!"

console.log(sentenceA)
console.log(sentenceB)



// LEVEL 1

const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(sentenceC)
console.log(sentenceD)



// LEVEL 2

sentenceA = sentenceA.toUpperCase()
sentenceB = sentenceB.toUppercase()



// LEVEL 3

function titleCase(str) {
  str = str.tolowerCase().split(' ')
  for (var i = 0 i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

console.log(titleCase("FaHrI AbDuL HaKiM"));