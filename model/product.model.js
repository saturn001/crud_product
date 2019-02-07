var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
      name : {type :String,
              required : true,
              max : 100},
      price : {type : Number,
                required : true},
});

module.exports = mongoose.model('Product',productSchema);
