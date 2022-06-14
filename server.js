const express = require('express')
const app = express()
const port = 80
const cors = require('cors')
const { userInfo } = require('os')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Test')
})

app.post('/test', (req, res) => {
  const { name0, name1, name2, name3, name4, name5 } = req.body
  res.send(JSON.stringify(req.body))
  console.log(req.body)
  // `че то ${req.query.email}, ещё че то ${req.query.password}, ого ещё че то ${req.query.text}, вау!!! ещё ответ на оформление кредита ${req.query.checkbox}`
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
