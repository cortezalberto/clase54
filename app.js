const express = require('express');
const app = express();

const path = require('path');
const puerto = process.env.PORT ;

const expressStatic = express.static(path.resolve(__dirname, "public"));
app.use(expressStatic);
app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, './views/encabezado1.html'));
});
app.get('/en2', (req, res) => {
    res.sendFile(path.join(__dirname, './views/encabezado2.html'));
});


app.get('/p', (req, res) => {
    res.sendFile(path.join(__dirname, './views/homepro.html'));
});
app.get('/a', (req, res) => {
    res.sendFile(path.join(__dirname, './views/homealber.html'));
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});