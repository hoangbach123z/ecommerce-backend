const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const cors = require('cors')
const bodyParser = require("body-parser");
dotenv.config()

const app = express();
const port = process.env.port || 3001

app.get('/',(req,res) => {
    return res.send('Hello World 123456789')
})
app.use(cors())
app.use(bodyParser.json())

routes(app);


mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log('Connect database success !!!')
})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log('Server is running in port', + port)
})