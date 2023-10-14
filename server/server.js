const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const fs = require("fs")

app.use(cors({
  origin: "*"
}))

app.use(express.json())
app.use(bodyParser.json())


app.get("/", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) return err
     res.send(data)
  })
})

app.listen(5000, (req, res) => {
  console.log("Listening on port 5000")
})