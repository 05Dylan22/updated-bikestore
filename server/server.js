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

app.get("/reviewPage", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) return err
    data = JSON.parse(data)
    const review = JSON.parse(req.query.review)
    data.allBikes[req.query.categoryName][req.query.index].reviews.push(review)
    data = JSON.stringify(data)
    fs.writeFileSync("./data/data.json", data)
  })
})

app.get("/", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) return err
    res.send(data)
  })
})

app.listen(5000, (req, res) => {
  console.log("Listening on port 5000")
})