var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  id:Number,
  name: String,
  color: String,
  price: Number,

});

module.exports=mongoose.model('Product',productSchema)