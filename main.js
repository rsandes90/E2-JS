const pizzas = [{
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["tomate", "muzzarella"],
        precio: 100,
    },
    {
        id: 2,
        nombre: "Jamon y Queso",
        ingredientes: ["tomate", "muzzarella", "Jamon y Queso"],
        precio: 150,
    },
    {
        id: 3,
        nombre: "Fugazzeta",
        ingredientes: ["tomate", "muzzarella", "Cebolla"],
        precio: 200,
    },
    {
        id: 4,
        nombre: "Humita",
        ingredientes: ["tomate", "muzzarella", "choclo", "salsa blanca"],
        precio: 250,
    },
    {
        id: 5,
        nombre: "Especial",
        ingredientes: ["tomate", "muzzarella", "Jamon", "Morron"],
        precio: 300,
    },
    {
        id: 6,
        nombre: "Anchoas",
        ingredientes: ["tomate", "anchoas"],
        precio: 350,
    },
];

const idPizza = document.getElementById("input");
const nombrePizza = document.getElementById("title");
const precioPizza = document.getElementById("price");
const boton = document.getElementById("button");

const mostrarPizza = (nombre, precio) => {
    nombrePizza.textContent = nombre;
    precioPizza.textContent = "$" + precio;
};

const mostrarError = () => {
    nombrePizza.textContent = "No existe la pizza";
    precioPizza.textContent = "";
};

const filtroDePizzas = () => {
    let valorInput = parseInt(idPizza.value);
    const resultado = pizzas.filter((pizza) => pizza.id == valorInput);

    if (resultado.length) {
        mostrarPizza(resultado[0].nombre, resultado[0].precio);
        return;
    } else {
        mostrarError();
        return;
    }
};

boton.addEventListener("click", filtroDePizzas);