require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>chai or code</h2>')
})
app.get('/twitter', (req, res) => {
    res.send('utkarsh.htm')
})
app.get("/login", (req, res) => {
    app.get("<h1> please login at chai aur code<h1>")
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})