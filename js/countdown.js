simplyCountdown('#cuenta', {
    year: 2025, // required
    month: 4, // required
    day: 11, // required
    hours: 20, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { // Words displayed into the countdown
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true, // Use plurals
    inline: false, // Inline countdown
    enableUtc: true, // Use UTC as default
    onEnd: function() {
        console.log("¡La cuenta regresiva ha terminado!");
        document.getElementById('portada').classList.add('oculta');

        // Mostrar el mensaje al finalizar la cuenta regresiva
        let mensaje = document.getElementById('mensajeFinal');
        if (mensaje) {
            mensaje.style.display = "flex"; // Se hace visible
            setTimeout(() => {
                mensaje.classList.add('mostrar'); // Aplica la animación de entrada
            }, 50);
        } else {
            console.error("Elemento mensajeFinal no encontrado");
        }
    },
    refresh: 1000, // Default refresh every 1s
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});
