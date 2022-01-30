const str = `
010-1234-5678
snflah3@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// test 메소드
const regexp = /fox/gi
console.log(regexp.test(str))

const regexp = /hello/gi
console.log(regexp.test(str))

//match 메소드
const regexp = /fox/gi
console.log(str.replace(regexp, 'AAA'))
console.log(str)

  //대체된 문자를 원본에 적용
let str = `
010-1234-5678
snflah3@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
const regexp = /fox/gi
str = str.replace(regexp, 'AAA')
console.log(str)