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


function grabData (searchTerm) {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) return err
    JSON.stringify(data)
    console.log(data["item"])
    return data[searchTerm]
  })
}

grabData("item2")

app.get("/", (req, res) => {
  res.send("hey")
})

app.listen(5000, (req, res) => {
  console.log("Listening on port 5000")
})