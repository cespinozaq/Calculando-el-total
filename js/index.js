const precio = 1444990;
const btnmas = document.querySelector(".btnmas");
const btnmenos = document.querySelector(".btnmenos");
let cuenta = 0;
let total = 0;

/*  */
const precioBase = document.querySelector(".precio-inicial");
precioBase.innerHTML = precio;

const precioTotal = document.querySelector(".valor-total");
precioTotal.innerHTML = total;

const cantidad = document.querySelector(".cantidad");

/* btn + - */
btnmas.onclick = function () {
  cuenta = cuenta + 1;
  cantidad.innerHTML = cuenta;
  precioTotal.innerHTML = cuenta * precio;
};

btnmenos.onclick = function () {
  if (cuenta > 0) {
    cuenta = cuenta - 1;
    cantidad.innerHTML = cuenta;
    precioTotal.innerHTML = cuenta * precio;
  }
};
