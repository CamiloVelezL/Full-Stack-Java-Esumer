const formulario = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const texto = input.value.trim(); // Obtiene el texto sin espacios extra
    if (texto === "") {
        mensajeError.classList.remove("oculto"); 
        return; // Detiene la ejecución
    }
    mensajeError.classList.add("oculto"); // Oculta el error si hay texto
    const item = document.createElement("li");
    item.textContent = texto;
    item.addEventListener("click", () => {
        item.classList.toggle("completada");
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    
    botonEliminar.addEventListener("click", (e) => {
        e.stopPropagation(); 
        item.remove(); // Elimina la tarea del DOM
    });


    item.appendChild(botonEliminar); // Mete el botón dentro del <li>
    lista.appendChild(item); // Mete el <li> dentro del <ul>
    input.value = "";
});