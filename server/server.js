const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const fs = require("fs")
const stripe = require("stripe")("sk_test_51N5f4bAKa6ZjvA8VQ48IgvwvEjlGWV2pGvWGbliIUkRWjw6ADxHnrB3NoZ8mXwIusNJI2cLJq5vZMmggDDaXvpox00XOxLG2Zt")

app.use(cors({
  origin: "*"
}))

app.use(express.json())
app.use(bodyParser.json())

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: `price_1OakUMAKa6ZjvA8VQF3sY94Q`,
        quantity: 1
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost/"
  })
  res.json({ url: session.url })
})

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