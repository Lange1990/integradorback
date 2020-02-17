var models = require("./models/Producto")

let Product = models.Product



Product.bulkCreate([
    {nombre: "Cartuchera",
    precio: 500,
    descripcion: "Te guarda los lapices gil",
    disponible: false},

    {nombre: "El Fantasma de Canterville",
    precio: 790,
    descripcion: "El era un hombre bueno, rondando sobre la ciudad, pago todas sus deudas pago su oportunidad de amar, pero siempre fue un tonto",
    disponible: true},

    {nombre: "El Fantasma de Canterville 2",
    precio: 800,
    descripcion: "Al final muere, que pena",
    disponible: true},

    {nombre: "Tijera",
    precio: 250,
    descripcion: "Si esto no funciona la voy a usar",
    disponible: true},

    {nombre: "Ganchitos",
    precio: 500,
    descripcion: "Que feo cuando la abrochadora no tiene ganchitos",
    disponible: true},

    {nombre: "Carpeta A4",
    precio: 500,
    descripcion: "Te guarda las hojas gil",
    disponible: false},

    {nombre: "Saynomore",
    precio: 790,
    descripcion: "La entrada es gratis",
    disponible: true},

    {nombre: "Saynomore 2",
    precio: 800,
    descripcion: "La salida vemos",
    disponible: true},

    {nombre: "Crayon",
    precio: 250,
    descripcion: "No es comestible flaco",
    disponible: true},

    {nombre: "Hojas",
    precio: 500,
    descripcion: "Sabes ctos arboles mueren x dia",
    disponible: true}
])

