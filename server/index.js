const connectToMongo = require('./db');
var cors = require('cors')
connectToMongo();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require("dotenv").config();

//using cors for directly connecting port 5000 from port 3000
app.use(cors())

//to use req.body we need this middleware-
app.use(express.json());

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`enotes listening on port ${port}`)
})
