simplyCountdown('#cuenta', {
	year: 2025, // required
	month: 4, // required
	day: 11, // required
	hours: 20, // Default is 0 [0-23] integer
	minutes: 30, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: true, //Use UTC as default
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');

		// Mostrar el mensaje al finalizar la cuenta regresiva
		let mensaje = document.getElementById('mensajeFinal');
		mensaje.classList.remove('oculto');
		setTimeout(() => {
			mensaje.classList.add('mostrar');
		}, 100);
	}, // Callback on countdown end
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: false,
	countUp: false
});
