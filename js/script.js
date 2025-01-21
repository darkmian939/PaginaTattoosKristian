const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = "img/hola.png"; // Cambiar la URL por la de la segunda imagen
    imagen.style.borderColor = 'var(--dorado)'; // Cambiar el color del borde al color dorado
    imagen.style.transform = 'scale(1.1)'; // Aplicar la escala al hacer hover
  }
  
  function restaurarImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = "img/hola.png";// Cambiar la URL por la de la primera imagen
    imagen.style.borderColor = 'transparent'; // Restaurar el color del borde al valor inicial
    imagen.style.transform = 'scale(1)'; // Restaurar la escala al quitar el hover
  }

  function cambiarimagen() {
    var imagen = document.getElementById("img");
    imagen.src = "img/hola.png"; // Cambiar la URL por la de la segunda imagen
    imagen.style.borderColor = 'var(--dorado)'; // Cambiar el color del borde al color dorado
    imagen.style.transform = 'scale(1.1)'; // Aplicar la escala al hacer hover
  }
  
  function restaurarimagen() {
    var imagen = document.getElementById("img");
    imagen.src = "img/hola.png";// Cambiar la URL por la de la primera imagen
    imagen.style.borderColor = 'transparent'; // Restaurar el color del borde al valor inicial
    imagen.style.transform = 'scale(1)'; // Restaurar la escala al quitar el hover
  }

  function Cambiarimagen() {
    var imagen = document.getElementById("image");
    imagen.src = "img/hola.png"; // Cambiar la URL por la de la segunda imagen
    imagen.style.borderColor = 'var(--dorado)'; // Cambiar el color del borde al color dorado
    imagen.style.transform = 'scale(1.1)'; // Aplicar la escala al hacer hover
  }
  
  function Restaurarimagen() {
    var imagen = document.getElementById("image");
    imagen.src = "img/hola.png";// Cambiar la URL por la de la primera imagen
    imagen.style.borderColor = 'transparent'; // Restaurar el color del borde al valor inicial
    imagen.style.transform = 'scale(1)'; // Restaurar la escala al quitar el hover
  }

  