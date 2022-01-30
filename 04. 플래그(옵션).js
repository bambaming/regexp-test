const str = `
010-1234-5678.
snflah3@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gim)) 
// 이스케이프 문자란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
// $는 꼭 .뒤에 써야함! 앞에 있는 줄이 끝나는 부분을 찾아서 일치시킨다. gim과 같이 사용