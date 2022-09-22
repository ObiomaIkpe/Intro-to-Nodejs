const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

require('dotenv').config()


//
app.use(express.static('./public'))
app.use(express.json())

app.get('/hello', (req, res) =>{
  res.send('task manager app')
})

app.use('/api/v1/tasks', tasks) //app.use

const port = 5000

const start = async () => {
try {
  await connectDB(process.env.MONGO_URI)
  console.log('connected to DB')
  app.listen(port, console.log(`server is listening on port ${5000}`))
 }
 catch (error){
console.log(error)
 }
}

start()

