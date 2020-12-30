var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    days: Number,
    date: Date,
    contact_number: Number
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;