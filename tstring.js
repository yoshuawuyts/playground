function tag (strings, ...values) {
  return strings[0] + values[0]() + strings[1]
}

const res = tag`Hello ${ a } world`
console.log(res)
// hello cruel world

function a () {
  return 'cruel'
}
