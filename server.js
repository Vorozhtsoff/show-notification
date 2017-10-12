const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use((req, res, next) => {
    console.log(req.url, new Date());
    return next();
});
app.use(express.static(__dirname));

app.post('/data.json', function (req, res) {
  res.send(fs.readFileSync('./data.json'));
});

app.listen(8082, function () {
  console.log('Example app listening on port 8081!');
});