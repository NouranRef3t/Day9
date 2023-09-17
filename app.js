
const express = require("express");
var mongoose = require("mongoose");
var Product = require("./modules/product");
var server = express();



server.use(express.urlencoded({ extended: true }));

server.use(express.json());


mongoose
  .connect(
    "mongodb+srv://nouranrefaat2020:Yasmeen2008@cluster0.uszrcla.mongodb.net/ecommerce"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error connection to database");
  });


 server.get('/home',(req,res)=>{
    res.send('<b> Welcome to our APIs </b>')
})

server.get('/',(req,res)=>{
  res.redirect('/home');
})

server.get("/products", function (req, res) {
  Product.find()
    .then((productsData) => {
      res.send(productsData);
    })
    .catch((err) => {
      res.send({
        error: "Error getting product",
      });
    });
});

server.get("/product/:id", function (req, res) {
  let prodId = +req.params.id;
  Product.findOne({ id: prodId })
    .then((singleProduct) => {
      res.send(singleProduct);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.use((req,res,next) =>{
  res.status(404).send("404 Not Found");
});

server.listen(4000, function () {
  console.log("server connected");
});