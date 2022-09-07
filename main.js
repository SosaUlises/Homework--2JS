let pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: "Queso, Tomate, Oregano, Cebolla",
        precio: 800
    },
    {
        id: 2,
        nombre: "Roquefort",
        ingredientes: "Queso azul, Oregano, Cebolla",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Fugazza",
        ingredientes: "Queso, Oregano, Cebolla",
        precio: 450
    },
    {
        id: 4,
        nombre: "Hongos",
        ingredientes: "Queso, Oregano, Cebolla, Hongos, Salsa blanca",
        precio: 1100
    },
    {
        id: 5,
        nombre: "Pollo",
        ingredientes: "Queso, Oregano, Cebolla, Pollo, Crema",
        precio: 1200
    },
    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: "Queso, Oregano, Cebolla, Calabresa",
        precio: 950
    }
]

// Selectores
let showName = document.querySelector('.showName');
let showPrice = document.querySelector('.showPrice');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const message = document.querySelector('.message');
const form = document.querySelector('.form');

// EventListener
button.addEventListener('click', e =>{
    e.preventDefault();

    const valueInput = input.value;

     if(filtrado(valueInput).length === 0 ){
        showMessage('error', 'Pizza no disponible')
       
    } else {
        filtrado(valueInput).forEach(pizza =>{
            const {nombre, precio} = pizza

            showName.textContent =  nombre;
            showPrice.textContent = `$${precio}`;
        })
    }
});

// Functiones
function filtrado(valor){
        const numberFiltrado = pizzas.filter(pizza => pizza.id == valor );
        return numberFiltrado
}

function showMessage(style, text){
    const p = document.createElement('p')
    p.textContent = text;
    p.classList.add(style);
    message.appendChild(p)
     showName.textContent = '';
    showPrice.textContent = ''; 
    setTimeout(() => {
        form.reset();
        p.remove()
    }, 2000);
}