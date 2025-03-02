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




        