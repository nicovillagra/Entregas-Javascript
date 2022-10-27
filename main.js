
let pizzasList =[
  {id:1 ,nombre:"Margarita","ingredientes":["Salsa de Tomate , queso , oregano"], precio:500, imagen:'https://images.hola.com/imagenes/cocina/recetas/20190911149183/pizza-margarita/0-717-935/pizza-m.jpg'},
  {id:2 ,nombre:"Fugazetta","ingredientes":["Cebolla , mozzarella , aceituna"], precio:700, imagen:'https://assets.unileversolutions.com/recipes-v2/210361.jpg'},
  {id:3 ,nombre:"Napolitana","ingredientes":["Salsa de tomate , mozzarella , tomate"], precio:900, imagen:'https://www.clarin.com/img/2022/02/02/xqwJySBdj_1200x630__1.jpg'},
  {id:4 ,nombre:"Rucula","ingredientes":["Salsa de tomate, Rucula , mozzarella , aceituna , queso"], precio:1000, imagen:'https://media.ambito.com/p/fd2aab1ac3e910a5158eb7f1279d5fe6/adjuntos/239/imagenes/038/153/0038153976/1200x675/smart/pizza-rucula-tomassojpg.jpg'},
  {id:5 ,nombre:"Anchoa","ingredientes":["Salsa de tomate, Anchoa , mozzarella"], "precio":1000, imagen:'https://cdn7.kiwilimon.com/recetaimagen/15736/16754.jpg'},
  {id:6 , nombre:"Especial",ingredientes:["Salsa de tomate , mozzarella , aceituna, jamon, morron"], precio:900, imagen:'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg'},


]

const input = document.getElementById("pizzas")
const button = document.getElementById("button")
const containerPizzas = document.getElementById("pizza-container")
const form = document.getElementById("form-list")


function savePizzaInLocalStorage(pizza,key){
  localStorage.setItem(key, JSON.stringify(pizza))
}

function getLastPizzaFromLocalStorage(key){
  List = JSON.parse(localStorage.getItem(key)) || []
  List = [...List]
  const lastPizza = List[List.length-1]
  return lastPizza;
}
const errorPizza = () => {
return `
<div class="pizza-error">
  <h2 data-id=>"La ID solicitada no existe"</h2>
  <img src="./assets/error.jpg" alt="">
</div>
`}
const errorPizzaLast = () =>{
return`
<div class="pizza-error-id">
  <h2>"Por Favor Ingresar Un Numero"</h2>
  <img src="./assets/error.jpg" alt="">
</div>
`}
const renderizar = (html) =>{
  containerPizzas.innerHTML = html
}
function findId (id){
  return pizzasList.filter(objPizza => objPizza.id == id)
}
function pizzaContainer(pizza){
  return `
  <div id="pizza-container2">
      <img src=${pizza.imagen} alt="">
          <h2>${pizza.nombre}</h2>
          <h3>$ ${pizza.precio}</h3>
          <h3>${pizza.ingredientes}</h3>
      </div>
  </div>
  `
}
const listRenders = list => {
  containerPizzas.innerHTML = list.map(list => pizzaContainer(list)).join('')
};

function viewList(event){
  event.preventDefault();
  
  const idPizza = input.value
  if(idPizza){
      const selectorPizza = findId(idPizza);
      
      if(selectorPizza.length){
        savePizzaInLocalStorage(selectorPizza, "pizza")
        renderizar(pizzaContainer(selectorPizza))
        input.value = ""
      }else{
          renderizar(errorPizza())
      }
  }else{
      renderizar(errorPizzaLast())

  }
  console.log(idPizza)

}
console.log(viewList)

const init = () => {
  const lastPizza = getLastPizzaFromLocalStorage("pizza");
  if(lastPizza){
    renderizar(pizzaContainer(lastPizza))
  }
  form.addEventListener('submit', viewList);
}

init();
//No pude arreglar el error al cambiar las pizzas



