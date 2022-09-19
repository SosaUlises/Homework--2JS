let pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: "Queso, Tomate, Oregano, Cebolla",
        precio: 800,
        img: "/img/pizzaNapo.jpg"
    },
    {
        id: 2,
        nombre: "Roquefort",
        ingredientes: "Queso azul, Oregano, Cebolla",
        precio: 1000,
        img: "/img/pizzaRoquefort.jpg"
    },
    {
        id: 3,
        nombre: "Fugazza",
        ingredientes: "Queso, Oregano, Cebolla",
        precio: 450,
        img: "/img/pizzaFugazza.jpg"
    },
    {
        id: 4,
        nombre: "Hongos",
        ingredientes: "Queso, Oregano, Cebolla, Hongos, Salsa blanca",
        precio: 1100,
        img: "/img/pizzaHongos.jpg"
    },
    {
        id: 5,
        nombre: "Pollo",
        ingredientes: "Queso, Oregano, Cebolla, Pollo, Crema",
        precio: 1200,
        img: "/img/pizzaPollo.jpg"
    },
    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: "Queso, Cebolla, Calabresa",
        precio: 950,
        img: "/img/pizzaPeperoni.jpg"
    }
]

// Selectores
const card = document.querySelector(".card")
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const message = document.querySelector('.message');
const form = document.querySelector('.form');

// LocalStorage
const saveLocalStorage = () =>{
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
}


// EventListener
button.addEventListener('click', e =>{
    e.preventDefault();
    saveLocalStorage();
    const valueInput = input.value;
    
     if(filtrado(valueInput).length == 0 ){
        
        showMessage('error', 'Ingrese una Pizza valida')
        card.innerHTML = "";
        
    } else {
        filtrado(valueInput).map(pizza =>{
            card.innerHTML = PizzaCard(pizza)
        })
    }
});

// Functiones
function filtrado(valor){
        const numberFiltrado = pizzas.filter(pizza => pizza.id == valor);
        return numberFiltrado
}

function showMessage(style, text){
    const p = document.createElement('p')
    p.textContent = text;
    p.classList.add(style);
    message.appendChild(p)
    setTimeout(() => {
        form.reset();
        p.remove()
    }, 2000);
}

// Render card
const PizzaCard = pizza =>{
    const {nombre, img, ingredientes, precio} = pizza;
    return `
    <div class="card-container">
    <img class="img-container" src="${img}">
    <h2 class="title-card"> Pizza de ${nombre} </h2>
    <h3> Ingredientes</h3>
    <p class="ingredientes">${ingredientes}</p>
    <h3>Precio: $${precio}</h3>
    </div>
    `
}

