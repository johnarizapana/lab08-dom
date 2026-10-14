# Bitacora de JavaScript interactivo 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (escribe aqui cual usaste) 
## Ejercicio 2: Seleccionar y modificar el DOM 

| Instrucción | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
| :--- | :--- | :--- |
| textContent desde la consola | Modifica el texto en pantalla | Si |
| textContent desde app.js | Modifica el texto en pantalla | Si |
| style.color | Cambia el color del texto | Si |
| classList.add | Aplica estilos de una clase | Si |
| createElement + appendChild | Agrega un nuevo elemento | Si |
## Ejercicio 3: Evento click 

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click          | Hacer un clic simple con el mouse | Suma 1 |
| dblclick       | Hacer un doble clic rápido con el mouse | Suma 2 |
| mouseover      | Pasar el puntero del mouse por encima del elemento | Suma 0 |

## Ejercicio 4: Eventos input y submit 

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El texto cambia en tiempo real mostrando "Hola, " seguido del nombre ingresado. | Si |
| Enviar sin preventDefault | El mensaje aparece por un breve instante, desaparece y el formulario se limpia. | Si |
| Enviar con preventDefault, correo sin @ | Muestra el mensaje de error "Correo no valido: falta @" en color rojo. | Si |
| Enviar con preventDefault, correo con @ | Muestra el mensaje "Enviado: " seguido del correo electrónico ingresado. | Si |

## Ejercicio 5: Clases y objetos 

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |


## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | No se muestra el total / Error en consola | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | const formProducto = document.querySelector("#formProducto"); | Permite buscar, seleccionar y manipular elementos HTML de la pagina desde JavaScript. |
| Evento | formProducto.addEventListener("submit", (evento) => { ... }); | Escucha las acciones del usuario para activar una funcion cuando se envia el formulario. |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Instancia un elemento concreto a partir de una clase para agrupar y modelar sus datos. |

