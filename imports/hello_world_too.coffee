# This is equivalent to `export default HelloWorld` in ES6
module.exports = class HelloWorld
  hello: (what = "World") -> "Hello #{what}!"
