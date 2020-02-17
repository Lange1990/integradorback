const S = require("sequelize")
const sequelize = require("../db")

class Categoria extends S.Model {}
Categoria.init({
    nombre: {
        type: S.STRING
    },  

}, { sequelize, modelName: "Categoria"});
console.log("Categoria creada")

class Product extends S.Model {}

Product.init({
    nombre: {
        type: S.STRING
    },
    precio: {
        type: S.INTEGER
    },

    descripcion: {
        type: S.STRING,
        get() {
            let testo =this.getDataValue('descripcion') 
            return testo.slice(0,20) +"..."
          }
    },

    disponible: {
        type: S.BOOLEAN,
        defaultValue: true
    }    

}, { sequelize, modelName: "Product"})
console.log("Product creado");

//------------Hook para los productos que se agreguen desde /agregar ------------//
Product.addHook('beforeCreate', function (producto) {
    // console.log(producto.disponible)
    producto.disponible === false ? producto.nombre = producto.nombre + " NO ESTA DISPONIBLE": producto.nombre = producto.nombre + ""
})

//-------------Mirate este hook hermoso-----------------//
// CON ESTE HOOK ME ASEGURO QUE SI EL SEED TIENE ALGUN PRODCUTO (CON DISPONIBILIDAD EN ESTADO FALSE) ME AGREGUE EL NO ESTA DISPONIBLE
Product.addHook('beforeBulkCreate', function (productos) {
    for (const producto of productos) {
        // console.log(producto)
        producto.disponible === false ? producto.nombre = producto.nombre + " NO ESTA DISPONIBLE": producto.nombre = producto.nombre + ""
}})

//------------BELONGS TO --------------------------//
Categoria.belongsTo(Product, {foreignKey: 'id'})



module.exports = {Categoria: Categoria, Product: Product}