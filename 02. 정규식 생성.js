const str = `
010-1234-5678
snflah3@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
/* const regexp = new RegExp('the', 'gi') */ //gi: 대문자 소문자 모두 검색
const regexp = /the/gi
console.log(str.match(regexp))