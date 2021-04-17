const express = require('express')

const app = express()
const routes = require('./routes/index')
const port = 3001

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(routes)

app.listen(port, () => {
  console.log('service connected ' + port)
})