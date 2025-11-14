
const pista = document.getElementById("pista");
const indicadores = document.getElementById("indicadores");
const slides = document.querySelectorAll(".slide");
let indice = 0;

function crearIndicadores() {
  slides.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.addEventListener("click", () => {
      indice = i;
      actualizarCarrusel();
    });
    indicadores.appendChild(punto);
  });
}

function actualizarCarrusel() {
  pista.style.transform = `translateX(${-indice * 270}px)`;
  const puntos = indicadores.querySelectorAll("span");
  puntos.forEach(p => p.classList.remove("activo"));
  puntos[indice].classList.add("activo");
}
function avanzarCarrusel() {
  indice = (indice + 1) % slides.length;
  actualizarCarrusel();
}

function retrocederCarrusel() {
  indice = (indice - 1 + slides.length) % slides.length;
  actualizarCarrusel();
}
function avanzarCarrusel() {
  indice = (indice + 1) % slides.length;
  actualizarCarrusel();
}


crearIndicadores();
actualizarCarrusel();
setInterval(avanzarCarrusel, 5000); // cambia cada 4 segundos


const pistaProduct = document.getElementById("pistaProduct");
const indicadoresProduct = document.getElementById("indicadoresProduct");
const slidesProduct = document.querySelectorAll(".slide-product");
let indiceProduct = 0;

function crearIndicadoresProduct() {
  slidesProduct.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.addEventListener("click", () => {
      indiceProduct = i;
      actualizarCarruselProduct();
    });
    indicadoresProduct.appendChild(punto);
  });
}

function actualizarCarruselProduct() {
  pistaProduct.style.transform = `translateX(${-indiceProduct * 290}px)`;
  const puntosProduct = indicadoresProduct.querySelectorAll("span");
  puntosProduct.forEach(product => product.classList.remove("activo"));
  puntosProduct[indiceProduct].classList.add("activo");
}
function avanzarCarruselProduct() {
  indiceProduct = (indiceProduct + 1) % slidesProduct.length;
  actualizarCarruselProduct();
}

function retrocederCarruselProduct() {
  indiceProduct = (indiceProduct - 1 + slidesProduct.length) % slidesProduct.length;
  actualizarCarruselProduct();
}

function avanzarCarruselProduct() {
  indiceProduct = (indiceProduct + 1) % slidesProduct.length;
  actualizarCarruselProduct();
}
crearIndicadoresProduct();
actualizarCarruselProduct();
setInterval(avanzarCarruselProduct, 5000); // cambia cada 4 segundos


/* Formulario contacto */
// const form = document.getElementById('form');
// const submitBtn = form.querySelector('button[type="submit"]');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     formData.append("access_key", "d5b903e7-6381-4de1-80af-0c47330d7bd7");

//     const originalText = submitBtn.textContent;

//     submitBtn.textContent = "Sending...";
//     submitBtn.disabled = true;

//     try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert("El mensaje ha sido enviado con éxito!");
//             form.reset();
//         } else {
//             alert("Error: " + data.message);
//         }

//     } catch (error) {
//         alert("Hubo un error, por favor intenta de nuevo.");
//     } finally {
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//     }
// });

/* Conexion con servidor de correo */
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const datos = new FormData(this);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: datos
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Formulario enviado correctamente");
      clearContainer();
    } else {
      alert("Error al enviar el formulario");
    }
  });
});

const clearContainer = () => {
    const elContainerFormContact = document.querySelector('#containerFormContact');
    elContainerFormContact.innerHTML = '';
}