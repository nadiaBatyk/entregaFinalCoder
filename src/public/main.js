const socket = io();

//MENSAJES
socket.on("datosMensajes", (mensaje) => {
  console.log(mensaje);

  return renderMensajes(mensaje);
});
function renderMensajes(mensaje) {
  const html = mensaje
    .map((item) => {
      return `<div class="flex">
      <p class="mail mr-1">${item?.emailFrom} </p>
      <p class="mail mr-1">${item?.emailTo} </p>
      <p class="fecha mr-1">[${item.timestamp}] :</p>
      <i class="mensaje">${item.text}</i>
      <p class="fecha mr-1">[${item.type}] :</p>
      
      
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
  (document.getElementById("emailFrom").value = ""),
    (document.getElementById("emailTo").value = ""),
    (document.getElementById("type").value = ""),
    (document.getElementById("text").value = "");
  socket.emit("nuevo-mensaje", mensaje);
}
