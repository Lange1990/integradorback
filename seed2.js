var models = require("./models/Producto")

let Categoria = models.Categoria



Categoria.bulkCreate([
    { nombre: 'utiles' },
    { nombre: 'libros' },
    { nombre: 'libros' },
    { nombre: 'utiles' },
    { nombre: 'repuestos' },
    { nombre: 'utiles' },
    { nombre: 'libros' },
    { nombre: 'libros' },
    { nombre: 'utiles' },
    { nombre: 'repuestos' },
]);