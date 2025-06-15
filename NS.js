document.addEventListener('DOMContentLoaded', function() {

    // --- Efecto de Máquina de Escribir para el Título ---
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        const text = "Purple Team";
        // Limpiamos el texto para la animación
        titleElement.innerHTML = ''; 
        // No necesitamos el bucle de tipeo porque CSS se encarga de la animación 'typing'.
        // Solo establecemos el texto final para que CSS pueda medir el 'width'.
        titleElement.innerHTML = text;
    }


    // --- Animación de Fade-In al hacer Scroll ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // El elemento se considera visible cuando el 20% está en pantalla
        rootMargin: "0px 0px -50px 0px" // Empieza a cargar un poco antes de que llegue al viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target); // Dejar de observar el elemento una vez que es visible
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});
