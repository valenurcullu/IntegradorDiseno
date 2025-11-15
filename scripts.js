(function() {
    const esModoOscuro = localStorage.getItem('darkMode') === 'true';
    if (esModoOscuro) {
        document.documentElement.classList.add('dark');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    
    const interruptorModoOscuro = document.getElementById('interruptorModoOscuro');
    
    function actualizarTextoBotonModo(esOscuro) {
        if (interruptorModoOscuro) {
            if (esOscuro) {
                interruptorModoOscuro.textContent = 'Modo Claro';
            } else {
                interruptorModoOscuro.textContent = 'Modo Oscuro';
            }
        }
    }

    let esModoOscuro = document.documentElement.classList.contains('dark');
    actualizarTextoBotonModo(esModoOscuro);

    if (interruptorModoOscuro) {
        interruptorModoOscuro.addEventListener('click', () => {
            esModoOscuro = !esModoOscuro;
            document.documentElement.classList.toggle('dark', esModoOscuro);
            localStorage.setItem('darkMode', esModoOscuro);
            actualizarTextoBotonModo(esModoOscuro);
        });
    }

    const formularioContacto = document.getElementById('formularioContacto');
    
    if (formularioContacto) {
        const modalExito = document.getElementById('modalExito');
        const botonCerrarModal = document.getElementById('botonCerrarModal');
        
        const nombre = document.getElementById('nombre');
        const errorNombre = document.getElementById('errorNombre');
        const email = document.getElementById('email');
        const errorEmail = document.getElementById('errorEmail');
        const mensaje = document.getElementById('mensaje');
        const errorMensaje = document.getElementById('errorMensaje');

        formularioContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            let esValido = true;

            errorNombre.style.display = 'none';
            errorEmail.style.display = 'none';
            errorMensaje.style.display = 'none';

            if (nombre.value.trim() === '') {
                errorNombre.style.display = 'block';
                esValido = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                errorEmail.style.display = 'block';
                esValido = false;
            }

            if (mensaje.value.trim() === '') {
                errorMensaje.style.display = 'block';
                esValido = false;
            }

            if (esValido) {
                console.log('Formulario válido. Mostrando modal...');
                if (modalExito) {
                    modalExito.style.display = 'flex';
                }
                formularioContacto.reset();
            } else {
                console.log('Formulario inválido.');
            }
        });

        if (botonCerrarModal) {
            botonCerrarModal.addEventListener('click', () => {
                modalExito.style.display = 'none';
            });
        }
        
        if (modalExito) {
            modalExito.addEventListener('click', (e) => {
                if (e.target === modalExito) {
                    modalExito.style.display = 'none';
                }
            });
        }
    }
});