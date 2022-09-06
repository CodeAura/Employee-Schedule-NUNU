const express = require('express');
const app = express()

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile('index.html', {root: __dirname });
})

app.get("/login", (req, res) => {
    res.sendFile('index.html', {root: __dirname });
})

app.get("/home", (req, res) => {
    res.sendFile('hub.html', {root: __dirname });
})

app.get("/planning", (req, res) => {
    res.sendFile('calender.html', {root: __dirname });
})

app.listen(3000)