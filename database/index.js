var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var Schema = mongoose.Schema

let cowSchema = new Schema({
  name: String,
  description: String
});

const Cow = mongoose.model('Cow', cowSchema);

var save = cow => {
  var doc = new Cow({
    name: cow.name,
    description: cow.description
  })
  doc.save();
}

var fetch = callback => {
  Cow.find()
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  save: save,
  fetch: fetch
}

