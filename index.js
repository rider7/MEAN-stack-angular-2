const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('Server is running!');
});
//when there is a get request response is hellow rold

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

//telling server to listen on port 8080
