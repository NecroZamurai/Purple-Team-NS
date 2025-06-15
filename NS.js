document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los elementos que deben aparecer con la animación
    const elementsToFadeIn = document.querySelectorAll('.fade-in-on-scroll');

    // Configuración del Intersection Observer
    // threshold: 0.1 significa que la animación se disparará cuando el 10% del elemento sea visible
    const observerOptions = {
        root: null, // Observa la intersección con el viewport
        rootMargin: '0px',
        threshold: 0.1
    };

    // La función que se ejecuta cuando un elemento observado entra o sale del viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (es visible en pantalla)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la transición CSS
                entry.target.classList.add('visible');
                // Deja de observar este elemento para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    };

    // Crea la instancia del observer
    const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Itera sobre cada elemento y le dice al observer que lo vigile
    elementsToFadeIn.forEach(element => {
        fadeInObserver.observe(element);
    });

});
