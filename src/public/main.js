const socket = io();

//MENSAJES
socket.on("datosMensajes", (mensaje) => {
  return renderMensajes(mensaje);
});
function renderMensajes(mensaje) {
  const html = mensaje
    .map((item) => {
      return `<div class="card p-4 ">
      <div class="flex">
      <p class="fecha "> [Fecha]: ${item.timestamp}</p>
      <p class="fecha ">[Tipo mensaje]: ${item.type}</p>
      </div>
      <div class="flex">
      <p class="mail ">[De]: ${item?.emailFrom} </p>
      <p class="mail "> [Para]: ${item?.emailTo} </p>
      </div>
      <p class="mensaje">[Mensaje]: ${item.text}</p>
      
  </div>`;
    })
    .join("<br> ");
    
  document.getElementById("mensajes").innerHTML = html;
}
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", (event) => {
  addMessage();
});
//esta funcion se ejecuta en el evento click del boton
//toma los valores del form y los envia al servidor
function addMessage() {
  const mensaje = {
    emailFrom: document.getElementById("emailFrom").value,
    emailTo: document.getElementById("emailTo").value,
    type: document.getElementById("type").value,
    text: document.getElementById("text").value,
  };
  console.log(mensaje);
  (document.getElementById("emailFrom").value = ""),
    (document.getElementById("emailTo").value = ""),
    (document.getElementById("type").value = ""),
    (document.getElementById("text").value = "");
  socket.emit("nuevo-mensaje", mensaje);
}
