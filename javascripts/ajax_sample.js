let number = 0;
let data = []; // Variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // Proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      data = request.response;
      updateContent();
    }
  };
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send();
}

function updateContent() {
  // Actualizar contenido con los datos actuales
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length;
}

function changeVideo() {
  // Proceso cuando se hace clic en el botón
  if (data.length === 0) {
    getData(); // Llamar al proceso getData si no se han recuperado datos
  } else {
    updateContent();
  }
}

button.addEventListener('click', changeVideo);

// Cargar datos y mostrar el primer contenido al cargar la página
window.onload = changeVideo;
