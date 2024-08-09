document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver(onChange, {
        rootMargin: "-60px",
        threshold: 0.4
    });

    document.querySelectorAll('article').forEach(el => observer.observe(el));

    function onChange(changes, observer) {
        changes.forEach(change => {
            if (change.intersectionRatio >= 0.4) {
                change.target.classList.add('in-view');
            } else {
                change.target.classList.remove('in-view');
            }
        });
    }

    // Ajustar el código según el tamaño de la pantalla
    if (window.innerWidth <= 600) {
        // Código para pantallas pequeñas (móviles)
    } else if (window.innerWidth <= 1024) {
        // Código para pantallas medianas (tabletas)
    } else {
        // Código para pantallas grandes (desktop)
    }
});