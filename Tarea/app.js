// Laboratorio 08 - Tarea: Gestor de Tareas Interactivo

// 1. Definición de la Clase Tarea (Clase propia)
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

// 2. Clase Gestora para administrar la lista
class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregar(tarea) {
    this.tareas.push(tarea);
  }

  eliminar(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  obtenerPorId(id) {
    return this.tareas.find((t) => t.id === id);
  }
}

// Instancia global del gestor
const gestor = new GestorTareas();

// Seleccionadores del DOM
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const selectPrioridad = document.querySelector("#selectPrioridad");
const mensajeError = document.querySelector("#mensajeError");

const inputBuscar = document.querySelector("#inputBuscar");
const contadorTareas = document.querySelector("#contadorTareas");
const listaTareas = document.querySelector("#listaTareas");

// Función para renderizar la lista en el DOM
function renderizarTareas(filtro = "") {
  listaTareas.innerHTML = "";
  const tareasFiltradas = gestor.tareas.filter((t) =>
    t.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  tareasFiltradas.forEach((tarea) => {
    const li = document.createElement("li");
    li.className = "tarea-item";

    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea.obtenerEtiqueta();
    if (tarea.completada) {
      spanTexto.classList.add("completada");
    }

    const divAcciones = document.createElement("div");

    const btnEstado = document.createElement("button");
    btnEstado.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnEstado.className = "btn-completar";
    
    // EVENTO 1: Click en botón completar
    btnEstado.addEventListener("click", () => {
      tarea.conmutarEstado();
      renderizarTareas(inputBuscar.value);
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Borrar";
    btnEliminar.className = "btn-eliminar";
    
    // EVENTO 2: Click en botón eliminar (modificación/eliminación de nodos)
    btnEliminar.addEventListener("click", () => {
      gestor.eliminar(tarea.id);
      li.remove(); // Eliminación directa del elemento DOM
      actualizarContador();
    });

    divAcciones.appendChild(btnEstado);
    divAcciones.appendChild(btnEliminar);

    li.appendChild(spanTexto);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);
  });

  actualizarContador(tareasFiltradas.length);
}

function actualizarContador(total = gestor.tareas.length) {
  contadorTareas.textContent = total;
}

// EVENTO 3: Submit con validación de formulario
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const tituloVal = inputTitulo.value.trim();

  // Validación: Título vacíó o muy corto
  if (tituloVal.length < 3) {
    mensajeError.textContent = "El título debe tener al menos 3 caracteres.";
    mensajeError.style.display = "block";
    return;
  }

  mensajeError.style.display = "none";
  const nuevaTarea = new Tarea(Date.now(), tituloVal, selectPrioridad.value);
  gestor.agregar(nuevaTarea);

  renderizarTareas(inputBuscar.value);
  formTarea.reset();
});

// EVENTO 4: Input en tiempo real para búsqueda
inputBuscar.addEventListener("input", () => {
  renderizarTareas(inputBuscar.value);
});