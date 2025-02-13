
// Clase que contiene la informacion del producto
function Producto(imagen, nombre, stikers, color_fondo, marca, precio) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.stikers = stikers;
    this.color_fondo = color_fondo;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = 1;
}

// Se crea el carrito
let carrito = [];

const icono_carrito = document.querySelector("#icono_carrito");
const div_carrito = document.querySelector("#carrito");
const lista_carrito = document.querySelector("#lista_carrito");

// Funcion que añade un producto la lista del carrito
function actualizar_lista_carrito(nuevo_prod){
    let nuevo = true;
    carrito.forEach(prod => {        
        if(prod.nombre === nuevo_prod.nombre){
            prod.cantidad++;
            nuevo = false;
        }
    });

    if(nuevo){
        carrito.push(nuevo_prod);
    }
    
}

// Funcion que actualiza la vista del carrito
function actualizar_carrito() {
    lista_carrito.innerHTML = `
    <li class="cabecera_carrito">
                    <span class="division separador"></span>
                    <span
                        class="contenido_carrito"><span>Imagen</span></span><span
                        class="division separador"></span>
                    <span
                        class="contenido_carrito"><span>Nombre</span></span><span
                        class="division separador"></span>
                    <span
                        class="contenido_carrito"><span>Precio</span></span><span
                        class="division separador"></span>
                    <span
                        class="contenido_carrito"><span>Cantidad</span></span><span
                        class="division separador"></span>
                </li>
    `
    carrito.forEach(prod => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class="separador"></span>
                <span>
                    <img class="contenido_carrito"
                        src="${prod.imagen}"
                        alt>
                </span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.nombre}</span></span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.precio}</span></span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.cantidad}</span></span><span
                    class="separador"></span>
        `;
        lista_carrito.appendChild(li); 
    });
};

const section_productos = document.getElementById("productos");

// Funcion que agrega un producto a la venta
function agregar_producto(prod){
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `<div class="imagen_producto">
                        <img
                            src="${prod.imagen}"
                            alt>
                    </div>
                    <div class="titulo_producto">
                        <span>${prod.nombre}</span>
                    </div>
                    <div class="atributos_producto">
                        <ul>
                            <li><span>Stikers: </span><span
                                    class="stikers">${prod.stikers}</span></li>
                            <li><span>Color de fondo: </span><span
                                    class="color_fondo">${prod.color_fondo}</span></li>
                            <li><span>Marca: </span><span
                                    class="marca">${prod.marca}</span></li>
                        </ul>
                    </div>
                    <div>
                        <span>Precio: </span><span class="precio">1000$</span>
                    </div>
                    <div class="boton_comprar">
                        <button>Añadir al Carrito</button>
                    </div>`  
    section_productos.appendChild(div);
    generar_eventos_botones_agregar_carrito();
}


// Evento boton limpiar carrito
const boton_limpiar_carrito = document.querySelectorAll(".boton_limpiar button");
boton_limpiar_carrito.forEach(boton => {
    boton.addEventListener("click", () => {
    carrito = [];
    actualizar_carrito();
    });
})

function generar_eventos_botones_agregar_carrito(){
    // Eventos de botones añadir al carrito
    let botones_agregar_carrito = document.querySelectorAll(".boton_comprar button");
    botones_agregar_carrito.forEach(boton => {
        boton.addEventListener("click", () => {
            const div_producto = boton.parentElement.parentElement;
            const nombre = div_producto.querySelector(".titulo_producto span").textContent;
            const imagen = div_producto.querySelector(".imagen_producto img").src;
            const stikers = div_producto.querySelector(".stikers").textContent;
            const color_fondo = div_producto.querySelector(".color_fondo").textContent;
            const marca = div_producto.querySelector(".marca").textContent;
            const precio = div_producto.querySelector(".precio").textContent;
            const nuevo_producto = new Producto(imagen, nombre, stikers, color_fondo, marca, precio);
            actualizar_lista_carrito(nuevo_producto);
            console.log(carrito);

            actualizar_carrito();

        });
    });
}

generar_eventos_botones_agregar_carrito()


// Se muestra el carrito al hacer hover
icono_carrito.addEventListener("mouseenter", () => {
    div_carrito.style.display = "block";
});

// Esconde el carrito al salir de este
div_carrito.addEventListener("mouseleave", () => {
    div_carrito.style.display = "none";
});

// Obtiene el formulario
document.getElementById("productoForm").addEventListener("submit", function (event) {

    event.preventDefault(); // Evita que la página se recargue

    // Capturar los valores del formulario
    let imagen = document.getElementById("imagen").value;
    let nombre = document.getElementById("nombre").value;
    let stikers = document.getElementById("stikers").value;
    let color_fondo = document.getElementById("color_fondo").value;
    let marca = document.getElementById("marca").value;
    let precio = parseFloat(document.getElementById("precio").value); // Convertir a número

    // Crear objeto Producto
    let producto = {
        imagen: imagen,
        nombre: nombre,
        stikers: stikers,
        color_fondo: color_fondo,
        marca: marca,
        precio: precio,
        cantidad: 1
    };
    agregar_producto(producto);

    
});
