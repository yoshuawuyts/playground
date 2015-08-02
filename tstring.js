function tag (strings, ...values) {
  console.log(strings[0]) // "Hello "
  console.log(strings[1]) // " world "
  console.log(typeof values[0]) // function
}

tag`Hello ${ a } world`

function a () {
  return 15
}
