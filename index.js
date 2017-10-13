const express = require('express');

const app = express();

app.use(express.static('public'))

app.use(function(req, res) {
  res.status(400)
  res.redirect('http://pycone.com')
})

app.listen(process.env.PORT || 8888);