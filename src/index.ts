import express, { Application } from 'express'

const app: Application = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/persons/active', (req, res) => {
  res.send({
    firstName: 'Karel',
    lastName: 'Gott',
    degree: 'MUDr.',
    date: Date.now(),
  })
})

app.get('/persons/archive', (req, res) => {
  res.send({})
})

app.listen(3000, () => {
  console.log('hallooo')
})
