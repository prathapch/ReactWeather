var express = require('express');

//create our app
var app = express();

//express.static specifies a folder
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
})
