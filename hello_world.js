const express = require('express')
var parseUrl = require('body-parser')
const app = express()
const port = 3000

let encodeUrl = parseUrl.urlencoded({ extended: false })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})

app.post('/', encodeUrl, (req, res) => {
  console.log('Form request:', req.body)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})