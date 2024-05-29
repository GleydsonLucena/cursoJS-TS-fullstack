const express = require('express');
const app = express();


// https://meusite.com/ <-GET - > entrega a página

app.use(express.urlencoded({ extended: true }))


app.post('/',
    (req, res) => {
        console.log(req.body);
        res.send(`O que vc me enviou foi ${req.body.nome}`)
    });

app.listen(3000,
    () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor execultando na porta 3000');
    });