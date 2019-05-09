const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

//app.use(express.static(`dist`));

//not sure what that line does ^^

// app.get('/', function(req, res) {
//   res.sendFile("index.html");
// });

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

// leave this
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
