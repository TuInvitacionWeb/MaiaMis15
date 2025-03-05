//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function copyAlias() {
    const aliasText = document.getElementById("aliasText").innerText;
    navigator.clipboard.writeText(aliasText).then(() => {
        alert("Alias copiado: " + aliasText);
    });
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector('.carrusel');
    const btnAnterior = document.querySelector(".boton-anterior");
    const btnSiguiente = document.querySelector(".boton-siguiente");
    const tarjetas = document.querySelectorAll(".marco-invitacion");
    const totalMarcos = tarjetas.length; // Definir el total de tarjetas
    let indice = 0;

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(${-indice * 100}%)`;
    }

    btnSiguiente.addEventListener("click", () => {
        if (indice < totalMarcos - 1) {
            indice++;
        } else {
            indice = 0; // Reinicia al inicio si llega al final
        }
        actualizarCarrusel();
    });

    btnAnterior.addEventListener("click", () => {
        if (indice > 0) {
            indice--;
        } else {
            indice = totalMarcos - 1; // Vuelve al final si está en el inicio
        }
        actualizarCarrusel();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contenedorCarrusel = document.querySelector(".contenedor-carrusel");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenedorCarrusel.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    observer.observe(contenedorCarrusel);
});

document.addEventListener("DOMContentLoaded", function () {
    const contenidoUbicacion = document.querySelector(".contenido-ubicacion");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenidoUbicacion.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    observer.observe(contenidoUbicacion);
});


document.addEventListener("DOMContentLoaded", function () {
    const contenedorFoto = document.querySelector(".contenedor-foto");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenedorFoto.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    observer.observe(contenedorFoto);
});

document.addEventListener("DOMContentLoaded", function () {
    const sobremi = document.querySelector(".sobremi");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sobremi.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    observer.observe(sobremi);
});

document.addEventListener("DOMContentLoaded", function () {
    const contenedorForm = document.querySelector(".contenedor-form");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenedorForm.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    observer.observe(contenedorForm);
});
