// Mwnggunakn Express
const express = require('express');
const { loadUser, findUser } = require('./utils/users.js');

const app = express();
const port = 3000;

// Menggunakan ejs
app.set('view engine', 'ejs');

// Built-in middleware
app.use(express.static('public'));

// Rautes halaman main
app.get('/', (req, res) => {
    res.render('main');
});

// Rautes halaman game
app.get('/game', (req, res) => {
    res.render('game');
});

// Rautes halaman game
app.get('/login', (req, res) => {
    res.render('login');
});

// Rautes halaman user
app.get('/user', (req, res) => {
    const users = loadUser();
    res.render('user', {
        users,
    });
});

// Rautes halaman user
app.get('/user/:username', (req, res) => {
    const user = findUser(req.params.username);

    res.render('detail', {
        user,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});