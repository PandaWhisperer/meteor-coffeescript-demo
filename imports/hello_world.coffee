class HelloWorld
  hello: (what = "World") -> "Hello #{what}!"

# this is equivalent to `export HelloWorld` in ES6
module.exports = { HelloWorld }
