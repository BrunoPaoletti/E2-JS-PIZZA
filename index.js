const Pizzas = [
    {
        id: 1,
        nombre: "jamon y morrones",
        ingredientes: ["salsa de tomate","queso","jamón","morrones"],
        precio: 550
    },
    {
        id: 2,
        nombre: "Jamón y ananá",
        ingredientes: ["salsa de tomate","queso","jamon","ananá"],
        precio: 1000
    },
    {
        id: 3,
        nombre: "Palmitos",
        ingredientes: ["salsa de tomate","queso","jamón","palmitos"],
        precio: 1200
    },
    {
        id: 4,
        nombre: "Fugazza",
        ingredientes: ["queso","cebolla","aceitunas"],
        precio: 1350
    },
    {
        id: 5,
        nombre: "americana",
        ingredientes: ["salsa de tomate","queso","bacon","huevo frito","aceitunas"],
        precio: 1400
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["salsa de tomate","queso","rúcula"],
        precio: 1550
    },
    {
        id: 7,
        nombre: "Champiñon",
        ingredientes: ["queso","jamon","champiñones","morron", "salsa blanca"],
        precio: 1690
    }
]


const input = document.getElementById('input')
const form = document.getElementById('form')
const container = document.getElementById('container')


const msgError = (msg) => {
    container.innerHTML = `<p class="error">${msg}</p>`
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const id = Number(input.value)

    const filteredPizza = Pizzas.filter(pizza => id === pizza.id)

    const renderPizzaYPrecio = (filteredPizza) => {
        return `<h2 class="pizza-nombre">${filteredPizza[0].nombre}</h2>
                <h3 class="pizza-valor">$${filteredPizza[0].precio}</h3>
              `
    }

    if (input.value === "") {
        msgError('No ha ingresado ningún ID de pizza')
    }
    else if (!filteredPizza.length) {
        msgError('El número ingresado no coincide con ningún ID de Pizza')
    } else {
        container.innerHTML = renderPizzaYPrecio(filteredPizza)
    }

    form.reset()
})

