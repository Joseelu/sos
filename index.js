/**********************/
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón de reproducción
    var playButton = document.getElementById("playbutton");

    // Obtenemos el elemento de audio
    var audio = document.getElementById("audio");

    // Escuchamos el evento 'click' en el botón de reproducción
    playButton.addEventListener("click", function() {
        // Verificamos si la música está pausada
        if (audio.paused) {
            // Si está pausada, la reproducimos
            audio.play();
            // Cambiamos el icono del botón a pausa
            playButton.innerHTML = '<i class="bi bi-pause"></i> Pause';
        } else {
            // Si está reproduciéndose, la pausamos
            audio.pause();
            // Cambiamos el icono del botón a play
            playButton.innerHTML = '<i class="bi bi-play"></i> Play';
        }
    });
});

