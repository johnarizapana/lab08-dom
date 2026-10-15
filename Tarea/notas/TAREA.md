# Tarea: Mi componente interactivo

Laboratorio 08 - DISAVIP
Alumno: John Ricardo Arizapana Flores
Grupo: E

## Componente elegido
**Gestor de Tareas Interactivo**: Un componente web que permite registrar tareas pendientes con nivel de prioridad, buscarlas dinámicamente en tiempo real, marcarlas como completadas y eliminarlas de la interfaz.

---

## Version 1: solo DOM
En esta primera versión se construyó la estructura HTML con sus secciones de formulario, búsqueda y lista no ordenada (`<ul>`). Se aplicaron manipulaciones directas agregando un elemento inicial estático mediante JavaScript.

```html
<form id="formTarea">
  <input id="inputTitulo" type="text" placeholder="Escribe una tarea...">
  <button type="submit">Agregar</button>
</form>
<ul id="listaTareas"></ul>