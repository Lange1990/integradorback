const express = require("express");
const db = require("./db")
const nunjucks = require("nunjucks");
const models =require("./models/Producto");


var routes = require('./routes');
const app = express();


let product = models.Product
let categoria = models.Categoria


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.engine('html', nunjucks.render); // como renderear templates html
app.set('view engine', 'html'); // que extensiones de archivo tienen los templates
nunjucks.configure('views', {noCache: true});



app.use('/', routes);

app.get("/",function (req,res,next){
    res.send("Holaaaaaaaaaaa")
})



product.sync({force:false})
    .then(()=>{
        return categoria.sync({force:false})
    })
    .then(()=>{
        console.log("Base de datos sincronizada")
        app.listen(3001, function(){
            console.log("El server esta escuchando en  el puerto 3001")
   })
})

module.exports = app
