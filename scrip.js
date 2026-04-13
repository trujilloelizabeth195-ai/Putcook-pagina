const tipoDoc = document.getElementById('tipoDoc');
const numDoc = document.getElementById('numDoc');

tipoDoc.addEventListener('change', function() {
    if (this.value === 'dni') {
        numDoc.placeholder = "Número de DNI";
        numDoc.maxLength = 8;
        numDoc.value = ""; // Limpia el campo al cambiar
    } else {
        numDoc.placeholder = "Número de CE";
        numDoc.maxLength = 12; // Largo estándar para CE
        numDoc.value = "";
    }
});

// Bloquear letras, solo permitir números
numDoc.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});


element.parentElement.querySelector(".box-container")

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  let menu = document.getElementById("menu");

  if (event.target === menu) {
    menu.classList.remove("abierto");
  }
}

function abrirMenu() {
  document.getElementById("menu-lateral").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function cerrarMenu() {
  document.getElementById("menu-lateral").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function abrirMenu() {
  document.getElementById("menu-lateral").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function cerrarMenu() {
  document.getElementById("menu-lateral").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".box");

buscador.addEventListener("keyup", function() {
  const texto = buscador.value.toLowerCase();

  productos.forEach(producto => {
    const nombre = producto.textContent.toLowerCase();

    if (nombre.includes(texto)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});

const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".box");
const mensaje = document.getElementById("no-resultados");

buscador.addEventListener("keyup", function() {
  const texto = buscador.value.toLowerCase();
  let encontrados = 0;

  productos.forEach(producto => {
    const nombre = producto.textContent.toLowerCase();

    if (nombre.includes(texto)) {
      producto.style.display = "block";
      encontrados++;
    } else {
      producto.style.display = "none";
    }
  });

  if (encontrados === 0) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
});


function scrollLeftCustom(btn) {
  const container = btn.parentElement.querySelector('.box-container');
  container.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
}

function scrollRightCustom(btn) {
  const container = btn.parentElement.querySelector('.box-container');
  container.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
}

