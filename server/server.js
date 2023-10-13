const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors({
  origin: "*"
}))

app.use(express.json())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  console.log("requested information")
})

app.listen(5000, (req, res) => {
  console.log("Listening on port 5000")
})