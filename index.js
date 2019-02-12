const app = require('express')()
const fetch = require('node-fetch')

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
  
app.get('/data', function(req, res, next) {
    fetch(API_URL)
        .then(response => response.json())
        .then(json => res.json(json))
})

app.listen(8080, function() {
    console.log('Server running at PORT: 8080')
})