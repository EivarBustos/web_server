const dotenv = require ('dotenv');
dotenv.config({path:'./port.env'});

const express = require('express')
const app = express()
var hbs = require('hbs');
//establecer variables de entorno 




const port =process.env.PORT;

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

// servir contenido estatico

app.use(express.static('public'))

app.get('/',  (req, res)=> {
    res.render('home', {
        nombre: 'Eivar Bustos',
        titulo:' Curso de Node'
    });
});

app.get('/generic',  (req, res)=> {
    // res.sendFile(__dirname +'/public/generic.html')
    res.render('generic',  {
        nombre: 'Eivar Bustos',
        titulo:' Curso de Node'
    })
})
app.get('/elements',  (req, res)=> {
    // res.sendFile(__dirname +'/public/elements.html')
    res.render('elements', {
        nombre: 'Eivar Bustos',
        titulo:' Curso de Node'
    })
})
  app.get('*',  (req, res)=> {
    res.sendFile(__dirname +'/public/404.html')
  })
app.listen(port, ()=>{
    console.log(`Example app listening at https://localhost: ${port}`)
})