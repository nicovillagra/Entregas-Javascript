 const Pizza = [
    {id:1 , "nombre":"Margarita","ingredientes":["Salsa de Tomate , queso , oregano"], "precio":500},
    {id:2 , "nombre":"Fugazetta","ingredientes":["Cebolla , mozzarella , aceituna"], "precio":700},
    {id:3 , "nombre":"Napolitana","ingredientes":["Salsa de tomate , mozzarella , tomate"], "precio":900},
    {id:4 , "nombre":"Rucula","ingredientes":["Salsa de tomate, Rucula , mozzarella , aceituna , queso"], "precio":1000},
    {id:5 , "nombre":"Anchoa","ingredientes":["Salsa de tomate, Anchoa , mozzarella"], "precio":1000},
    {id:6 , "nombre":"Especial","ingredientes":["Salsa de tomate , mozzarella , aceituna, jamon, morron"], "precio":900},


]
console.log(Pizza)
const IdImpar = Pizza.filter(id=> id.id===1|| id.id==3 || id.id===5)

IdImpar.forEach((id)=>{
    console.log(`La Pizza ${id.nombre} tiene una id impar`)
})
const PizzaCara = (precios)=>{
    Pizza.some(precio => precio.precio < precio)
    console.log(`Hay pizzas con un precio menor a $${precios}`)
}
PizzaCara(600)

const PizzaPrecios = Pizza.map((Pizzas)=>{
    return { ...Pizzas, precio:Pizzas.precio}
})
PizzaPrecios.forEach((pizza)=>{
    console.log(`La Pizza de ${pizza.nombre} tiene un precio de ${pizza.precio}`)
})

const Pizzaingredientes = Pizza.map((ingredientes)=>{
    return {...ingredientes,ingredientes:ingredientes.ingredientes}
})

Pizzaingredientes.forEach((pizza)=>{
    console.log(`La Pizza de ${pizza.nombre} tiene los siguientes ingredientes ${pizza.ingredientes}`)
})

    
