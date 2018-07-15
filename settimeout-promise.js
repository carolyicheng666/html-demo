setTimeout(() => {
  console.log(1)
}, 0)

new Promise((resolve, reject) => {
  resolve()
}).then(() => {
  console.log(2)
})

console.log(3)
