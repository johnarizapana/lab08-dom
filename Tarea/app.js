// Laboratorio 08: DISAVIP - Tarea Final
// Autor: John Ricardo Arizapana Flores

// 1. CLASE PROPIA
class Tarea {
  constructor(id, titulo, prioridad) {
    this.id = id;
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  conmutarEstado() {
    this.completada = !this.completada;
  }

  obtenerEtiqueta() {
    return `[${this.prioridad}] ${this.titulo}`;
  }
}

// 2. CLASE GESTORA
class GestorTareas {
  constructor() {
    this.items = [];
  }

  agregar(tarea) {
    this.items.push(tarea);
  }

  eliminar(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  obtenerFiltradas(criterio) {
    return this.items.filter((item) =>
      item.titulo.toLowerCase().includes(criterio.toLowerCase())
    );
  }
}

// Instancia principal del gestor
const gestor = new GestorTareas();

// 3. SELECCIÓN DE ELEMENTOS DEL DOM
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const selectPrioridad = document.querySelector("#selectPrioridad");
const mensajeError = document.querySelector("#mensajeError");

const inputBuscar = document.querySelector("#inputBuscar");
const contadorTareas = document.querySelector("#contadorTareas");
const listaTareas = document.querySelector("#listaTareas");

// 4. FUNCIÓN PARA RENDERIZAR LA INTERFAZ
function renderizarTareas() {
  const criterio = inputBuscar.value;
  const tareasVisibles = gestor.obtenerFiltradas(criterio);

  listaTareas.innerHTML = "";

  tareasVisibles.forEach((tarea) => {
    // Creación dinámica de elementos del DOM
    const li = document.createElement("li");
    li.className = "tarea-item";

    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea.obtenerEtiqueta();
    if (tarea.completada) {
      spanTexto.classList.add("completada");
    }

    const divAcciones = document.createElement("div");
    divAcciones.className = "acciones";

    // Botón para cambiar estado (Evento Click 1)
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnCompletar.className = "btn-completar";
    btnCompletar.addEventListener("click", () => {
      tarea.conmutarEstado();
      renderizarTareas();
    });

    // Botón para eliminar elemento (Evento Click 2 y eliminación del DOM)
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Borrar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.addEventListener("click", () => {
      gestor.eliminar(tarea.id);
      li.remove();
      actualizarContador();
    });

    divAcciones.appendChild(btnCompletar);
    divAcciones.appendChild(btnEliminar);

    li.appendChild(spanTexto);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);
  });

  actualizarContador();
}

function actualizarContador() {
  const criterio = inputBuscar.value;
  const visibles = gestor.obtenerFiltradas(criterio);
  contadorTareas.textContent = visibles.length;
}

// 5. MANEJADORES DE EVENTOS PRINCIPALES

// EVENTO 1: SUBMIT (Envío de formulario con validación)
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const tituloVal = inputTitulo.value.trim();

  // Validación: mínimo 3 caracteres
  if (tituloVal.length < 3) {
    mensajeError.textContent = "El título debe contener al menos 3 caracteres.";
    mensajeError.style.display = "block";
    return;
  }

  mensajeError.style.display = "none";

  const nuevaTarea = new Tarea(Date.now(), tituloVal, selectPrioridad.value);
  gestor.agregar(nuevaTarea);

  renderizarTareas();
  formTarea.reset();
});

// EVENTO 2: INPUT (Búsqueda interactiva en tiempo real)
inputBuscar.addEventListener("input", () => {
  renderizarTareas();
});