document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.7) { // Si más del 70% del elemento está visible
                // Remover la clase scale-110 de todos los elementos
                document.querySelectorAll('.scale-on-scroll').forEach(el => {
                    el.classList.remove('scale-105');
                });

                // Agregar la clase scale-110 al elemento actual
                entry.target.classList.add('scale-105');
            } else {
                // Si menos del 70% del elemento está visible, quitar la clase
                entry.target.classList.remove('scale-105');
            }
        });
    }, { threshold: Array.from({length: 101}, (_, i) => i / 100) });

    document.querySelectorAll('.scale-on-scroll').forEach((element) => {
        observer.observe(element);
    });
});