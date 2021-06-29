const express = require('express');

const app = express()

app.get('/', function(req, res) {
    res.send('Hello World! IT worksss')
})
app.listen(process.env.PORT || 1223)

module.exports = app