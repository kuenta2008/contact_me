document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // INDEX.HTML - Video de fondo
    // =====================
    var video = document.querySelector('.video-fondo');

    if (video && !document.getElementById('video-sorpresa')) {
        video.muted = true;

        video.play().catch(function (error) {
            console.log("Reproducción automática bloqueada:", error);
        });

        // Si el video falla (ej: GitHub Pages no sirve bien el MP4)
        video.addEventListener('error', function () {
            console.log("Error al cargar el video de fondo.");
            video.style.display = 'none';
            document.body.style.background = '#0d0d0d';
        });
    }

    // =====================
    // SORPRESA.HTML - Botón revelar
    // =====================
    var boton = document.getElementById('boton-revelar');

    if (boton) {
        var mensaje = document.getElementById('mensaje-inicial');
        var overlay = document.querySelector('.overlay');
        var videoSorpresa = document.getElementById('video-sorpresa');

        boton.addEventListener('click', function () {
            mensaje.style.display = 'none';
            overlay.style.display = 'none';

            videoSorpresa.style.display = 'block';
            videoSorpresa.currentTime = 0;
            videoSorpresa.volume = 1.0;

            if (videoSorpresa.requestFullscreen) {
                videoSorpresa.requestFullscreen();
            } else if (videoSorpresa.webkitRequestFullscreen) {
                videoSorpresa.webkitRequestFullscreen();
            } else if (videoSorpresa.msRequestFullscreen) {
                videoSorpresa.msRequestFullscreen();
            }

            videoSorpresa.play().catch(function (error) {
                console.log("Error al reproducir el video:", error);
                alert("¡Haz clic en el video para reproducirlo!");
            });
        });
    }

});