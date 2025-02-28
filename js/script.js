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
    const totalMarcos = document.querySelectorAll(".marco").length;
    let indice = 0;

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(${-indice * 100}%)`;
    }

    document.querySelector(".boton-siguiente").addEventListener("click", () => {
        indice = (indice + 1) % totalMarcos;
        actualizarCarrusel();
    });

    document.querySelector(".boton-anterior").addEventListener("click", () => {
        indice = (indice - 1 + totalMarcos) % totalMarcos;
        actualizarCarrusel();
    });
});



        