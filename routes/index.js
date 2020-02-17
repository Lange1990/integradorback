var express = require('express');
var router = express.Router();
var models = require("../models/Producto")
let Product = models.Product
let Categoria = models.Categoria

////---------------------------------CATEGORIAS------------------------------------------////
//// LISTA TODAS LAS CATEGORIAS

router.get('/categorias', (req, res, next) => {
    Categoria.findAll()
        .then(categorias => res.json(categorias))
    // res.json("Hola")
})

////----------------------------------AGREGAR-------------------------------------------////
//// DE ESTA FORMA SE AGREGA UN PRODUCTO Y AL MISMO TIEMPO SE AGREGA LA CATEGORIA DEL MISMO
//// ASI LOGRO MANTENER ID'S IGUALES Y DESPUES UNIRLOS CON EL BELONGSTO
router.get('/agregar', (req, res, next) => {
    res.render("index.html")
        
})

router.post('/agregar', (req, res, next) => {
    console.log(req.body.pepe)
    Product.create({ 
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion:req.body.descripcion,
        disponible: req.body.disponible,

    }).then(productoCreado => {
       console.log(req.body.pepe)})
    
    Categoria.create({
        nombre: req.body.pepe
    }).then(()=> res.redirect("/agregar"))
       

})
////--------------------------PRODUCTOS y BUSQUEDA POR QUERY -------------------------------////

router.get('/productos', (req, res, next) => {
    // console.log(req.query.categoria)
    !req.query.categoria ? Product.findAll()
        .then(productos => res.json(productos))

    : Categoria.findAll({
            where: { nombre: req.query.categoria },
            include: { model: Product},
    }) .then(productos => res.json(productos)) 
            
})

////---------------------------------ELIMINAR------------------------------------------////
//// FUNCIONA CON POSTMAN, TE BORRA TANTO EL PRODUCTO COMO LA CATEGORIA, UNIDOS POR EL MISMO ID
//// LO ENTENDI ASI POR ESO LO HICE MEDIO CHONGO

router.get("/eliminar",function (req,res,next){
    res.json("Eliminar")
    
})

router.delete("/eliminar",function (req,res,next){
    console.log(req.body)
    console.log(res.params)
    Product.findByPk(req.body.id)
        .then(producto => producto.destroy())
    Categoria.findByPk(req.body.id)
    .then(producto => producto.destroy())    
        .then(()=> res.redirect("/productos"))
        .catch(next)
    
})

////------------------------------------BUSQUEDA----------------------------------------------////
//// PRIMERO ENTENDI QUE HABIA QUE HACERLO ASI, PERO EL LUNES ME ENTERE QUE ERA USANDO QUERY /////

// router.get('/productos?categoria=libros', (req, res, next) => {
//     console.log(req.query)
//     // Categoria.findAll({
//     //     where: { nombre: 'Utiles' },
//     //     include: { model: Product},
//     res.json("siiiiiiiiii")
// })
        // .then(productos => res.json(productos))


        router.get('/busqueda', (req, res, next) => {
            res.render("busqueda.html")
                
        })
        
        router.post('/busqueda', (req, res, next) => {
            Categoria.findAll({
                where: { nombre: req.body.nombre },
                include: { model: Product},
        })
                .then(productos => res.json(productos))
                
        })
        
        router.get("/productos/:id", (req,res,next)=> {
            Product.findOne({where: req.params})
                .then(productos => productos ? res.json(productos) : res.redirect("/productos"))
                .catch(()=> res.json("noooooooo") )
        })
        



module.exports = router;