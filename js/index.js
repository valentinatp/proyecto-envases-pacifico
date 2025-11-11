
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