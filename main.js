
let pizzasList =[
  {id:1 ,nombre:"Margarita","ingredientes":["Salsa de Tomate , queso , oregano"], precio:500},
  {id:2 ,nombre:"Fugazetta","ingredientes":["Cebolla , mozzarella , aceituna"], precio:700},
  {id:3 ,nombre:"Napolitana","ingredientes":["Salsa de tomate , mozzarella , tomate"], precio:900},
  {id:4 ,nombre:"Rucula","ingredientes":["Salsa de tomate, Rucula , mozzarella , aceituna , queso"], precio:1000},
  {id:5 ,nombre:"Anchoa","ingredientes":["Salsa de tomate, Anchoa , mozzarella"], "precio":1000},
  {id:6 , nombre:"Especial",ingredientes:["Salsa de tomate , mozzarella , aceituna, jamon, morron"], precio:900},


]

const input = document.getElementById("pizzas")
const button = document.getElementById("button")
const containerPizzas = document.getElementById("pizza-container")
const form = document.getElementById("form-list")

function pizzaFun(){
  list = JSON.parse(localStorage.getItem("pizzasList")) || []; 
  return list;
};
console.log(pizzaFun)

const SavePizzaListLocalStorage = () => {
  localStorage.setItem('pizzasList', JSON.stringify(list))
}
const containersPizza = pizzaContainer =>
`
 <div id="pizza-container2">
   <h2 data-id=${pizzaContainer.id}>${pizzaContainer.nombre}</h2>
   <h3 data-id=${pizzaContainer.id}>${pizzaContainer.precio}</h3>
 </div>
`
const listRenders = list => {
  containerPizzas.innerHTML = list.map(list => containersPizza(list)).join('')
};

const viewList = element => {
  element.preventDefault();
  const pizzaId = input.value;
  if(!pizzaId) {list = [...list, {id: undefined, nombre: "Por favor ingrese un ID", precio:0}]}else{
    const renderpizza =  pizzasList.find( Pizza => Pizza.id == pizzaId); 
    if (renderpizza == undefined)
    {
        list = [...list,
           {id: undefined,
             nombre: "No existe el numero de pizza", 
             precio:0}]
    }else
    {
        list = [...list, 
            {id: renderpizza.id,
             nombre: renderpizza.nombre, 
             precio : renderpizza.precio}];
    }
}
  listRenders(list)
  SavePizzaListLocalStorage(list)
  input.value=""

}
console.log(viewList)
const init = () => {
  const list = pizzaFun();
  form.addEventListener('submit', viewList);
}

init();




