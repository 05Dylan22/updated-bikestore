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

const bikes = {
  "5010 Carbon C R Mountain Bike": "price_1Oame1AKa6ZjvA8V1Q4grrP3",
  "Ripley XT Factory Mountain Bike": "price_1Oal1YAKa6ZjvA8VikrjEpYv",
  "Trek Remedy 9.9 Mountain Bike - 2019, 19.5": "price_1Oal2NAKa6ZjvA8Vs5oNMyOk",
  "Chameleon MX D Mountain Bike": "price_1Oal3SAKa6ZjvA8V4rDen4Ku",
  "Specialized 2022 Specialized Rockhopper Comp 29 Hardtail Mountain Bike": "price_1Oal4VAKa6ZjvA8VEX2LE8MR",
  "Diamondback 2022 Hook 27.5 Inch Hardtail Mountain Bike": "price_1Oal5qAKa6ZjvA8VXPSwexWj",
  "Chameleon MX S Mountain Bike": "price_1Oald4AKa6ZjvA8Vx49VUEIU",
  "2023 Polygon Xtrada 6 1x11 - Mountain Bike": "price_1OaldeAKa6ZjvA8Vyjd4hJNd",
  "VITUS RAPIDE FS CRX MOUNTAIN BIKE": "price_1OaleAAKa6ZjvA8VJqdhIFcb",
  "Trail 429 Pro XT/XTR Mountain Bike": "price_1OalesAKa6ZjvA8V7QXy71Tk",
  "Ripmo XT Mountain Bike": "price_1OalfZAKa6ZjvA8VRG8fpU9E",
  "MTR 8.9": "price_1Oalg0AKa6ZjvA8V4ICMHcHm",
  "SB160 C1 SLX Mountain Bike": "price_1OalgTAKa6ZjvA8VUy3sr4ho",
  "Slash 9.9 XX1 Flight Attendant": "price_1Oalh4AKa6ZjvA8VWIDwY2Yy",
  "Specialized Enduro Pro Mountain Bike - 2018, Large": "price_1OalhYAKa6ZjvA8VQR0h3mYc",
  "2022 Canyon Sender CFR Mullet Underdog Bike": "price_1Oali7AKa6ZjvA8VuimWAUvZ",
  "Demo Expert": "price_1OaljLAKa6ZjvA8VxN7muHHV",
  "ROCKY MOUNTAIN SLAYER CARBON 50 29 BIKE 2022": "price_1OaljtAKa6ZjvA8VLdwIdDhy",
  "Salsa Mukluk Deore 11 Fat-Tire Bike": "price_1OalkaAKa6ZjvA8Vzm1QCnRt",
  "Farley 9.6": "price_1Oall0AKa6ZjvA8Vdm1wheI7",
  "Specialized 2020 Fatboy": "price_1OallVAKa6ZjvA8Vb3QbI1gk"
}

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.map((item) => {
      return {price: bikes[item.bikeName], quantity: item.quantity}
    }),
    mode: "payment",
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/"
  })
  res.json({ url: session.url })
})

app.get("/reviewPage", (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) return err
    data = JSON.parse(data)
    const review = JSON.parse(req.query.review)
    console.log(req.query.categoryName)
    console.log(req.query.index)
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