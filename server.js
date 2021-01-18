const express = require('express')
const hbs = require('hbs')
const app = express()

const port = process.env.PORT || 3000

//helper
hbs.registerHelper('year', () => {
    return new Date().getFullYear()
})

app.use(express.static(__dirname + ''))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Listening...')
})