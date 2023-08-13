const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const chatroutes = require("./routes/chatroutes")
const app = express();
app.use(cors())
app.use(bodyParser.json())
const dotenv = require("dotenv")
const port = 3000|| process.env.port;
dotenv.config()
app.use("/",chatroutes)

app.listen(port,()=> console.log(`port is running at ${port}`))
