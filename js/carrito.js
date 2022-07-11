let carrito = [];
let sectionPaquetes = document.getElementById("section-paquetes");
let sectionCarrito = document.getElementById("section-carrito");

//creacion de la seccion carrito con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadPaquetes = document.createElement("div");
cantidadPaquetes.innerHTML = "<h3>Cantidad de paquetes: </h3>";
sectionCarrito.appendChild(cantidadPaquetes);

let cantPaquetes = document.createElement("h3");
cantPaquetes.innerText = " 0";
cantidadPaquetes.appendChild(cantPaquetes);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

//Le agrego un evento al boton para que muestre el precio final y despues se vacie el carrito
botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert("Total a abonar: $" + precioFinal);
    vaciarCarrito();
}

//Renderizado de los paquetes en cards
for (const paquete of paquetes) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-paquete");
    container.innerHTML = ` <div class="img-container">
                            <img src="${paquete.foto}" alt="${paquete.nombre}" class="img-paquete"/>
                            </div>
                            <div class="info-paquete">
                            <p class="font">${paquete.nombre}</p>
                            <strong class="font">$${paquete.precio}</strong>
                            <button class="boton" id="${paquete.id}"> Agregar al carrito </button>
                            </div>`;
    sectionPaquetes.appendChild(container);
    //Evento para que los paquetes se agreguen al carrito al hacer click en el boton
    document.getElementById(`${paquete.id}`).onclick = () => agregarAlCarrito(`${paquete.id}`);
}

//Funciones
function agregarAlCarrito(id) {
    carrito.push(paquetes.find(p => p.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const paquete of carrito) {
        total += paquete.precio;
    }
    montoTotalCompra.innerText = total;
    cantPaquetes.innerText = carrito.length;
}

function vaciarCarrito() {
    montoTotalCompra.innerText = "0";
    cantPaquetes.innerText = "0";
    localStorage.clear();
    carrito=[];
}