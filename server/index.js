//require express module
const express = require('express');
// require database
const database = require('../database/index.js');

//require bodyparser module
const bodyParser = require('body-parser');
//make an express instance called app
const app = express();
//serve up static files upon load
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`)
});

app.post('/cows', function (req, res) {
  console.log('made it to server: ', req.body);
  database.save(req.body, (err, results) => {
    if (err){
      console.log(err);
    } else {
      callback(null, results);
      res.send();
    }
  })
});

app.get('/cows', function (req, res) {
  database.fetch((err, results) => {
    if (err){
      console.log(err)
    } else{
      console.log('this is in results of get inside server file:', results)
      //res.writeHead()
      //how to send this shit back up!!!
      res.send(results);
    }
  });
})