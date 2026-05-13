console.log("JS FUNCIONANDO");

document.addEventListener("DOMContentLoaded", () => {

  // ======================================
  // FORMULARIO DOCUMENTO
  // ======================================

  const tipoDoc = document.getElementById("tipoDoc");
  const numDoc = document.getElementById("numDoc");

  if (tipoDoc && numDoc) {

    tipoDoc.addEventListener("change", function () {

      if (this.value === "dni") {

        numDoc.placeholder = "Número de DNI";
        numDoc.maxLength = 8;

      } else {

        numDoc.placeholder = "Número de CE";
        numDoc.maxLength = 12;

      }

      numDoc.value = "";

    });

    numDoc.addEventListener("input", function () {

      this.value = this.value.replace(/[^0-9]/g, "");

    });

  }


  // ======================================
  // BUSCADOR
  // ======================================

  const buscador = document.getElementById("buscador");
  const productos = document.querySelectorAll(".box");

  if (buscador) {

    buscador.addEventListener("input", () => {

      const texto = buscador.value.toLowerCase();

      productos.forEach(producto => {

        const nombre = producto
          .querySelector("h3")
          .innerText
          .toLowerCase();

        if (nombre.includes(texto)) {

          producto.style.display = "flex";

        } else {

          producto.style.display = "none";

        }

      });

    });

    buscador.addEventListener("keydown", (event) => {

      if (event.key === "Enter") {

        event.preventDefault();

        const texto =
          buscador.value.toLowerCase().trim();

        let encontrado = false;

        productos.forEach(producto => {

          const nombre = producto
            .querySelector("h3")
            .innerText
            .toLowerCase();

          if (nombre === texto) {

            producto.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            producto.style.border =
              "3px solid red";

            setTimeout(() => {

              producto.style.border = "none";

            }, 2000);

            encontrado = true;

          }

        });

        if (!encontrado) {

          alert("Producto no encontrado");

        }

      }

    });

  }


  // ======================================
  // CARRITO
  // ======================================

  let total = 0;

  const carrito =
    document.getElementById("cart-total");

  const botonesCarrito =
    document.querySelectorAll(".add-to-cart");

  botonesCarrito.forEach(boton => {

    boton.addEventListener("click", () => {

      const producto =
        boton.closest(".box");

      const precioTexto =
        producto.querySelector(".price").innerText;

      const precio = parseFloat(
        precioTexto.replace("S/", "").trim()
      );

      total += precio;

      carrito.innerText =
        `🛒 S/ ${total.toFixed(2)}`;

    });

  });

});


// ======================================
// MENÚ LATERAL
// ======================================

function abrirMenu() {

  document
    .getElementById("menu-lateral")
    .classList.add("active");

  document
    .getElementById("overlay")
    .classList.add("active");

}

function cerrarMenu() {

  document
    .getElementById("menu-lateral")
    .classList.remove("active");

  document
    .getElementById("overlay")
    .classList.remove("active");

}

// ======================================
// SCROLL PRODUCTOS
// ======================================

function scrollLeftCustom(btn) {

  const container =
    btn.parentElement.querySelector(".box-container");

  container.scrollBy({
    left: -200,
    behavior: "smooth"
  });

}

function scrollRightCustom(btn) {

  const container =
    btn.parentElement.querySelector(".box-container");

  container.scrollBy({
    left: 200,
    behavior: "smooth"
  });

}