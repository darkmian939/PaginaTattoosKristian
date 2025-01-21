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


const imagesData = [
    {
        src: 'img/img.png',
        likes: 10,
        comments: ['Comentario 1', 'Comentario 2', 'Comentario 3'],
    },
    {
        src: 'img/pier.jpg',
        likes: 5,
        comments: ['Comentario 1'],
    },
    // Agregar más datos de imágenes aquí
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    imagesData.forEach((imageData, index) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = `Tatuaje o piercing ${index + 1}`;

        const details = document.createElement('div');
        details.classList.add('details');

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const likeBtn = document.createElement('butt');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = `Like (${imageData.likes})`;
        likeBtn.addEventListener('click', () => {
            imageData.likes++;
            likeBtn.textContent = `Like (${imageData.likes})`;
        });

        const commentBtn = document.createElement('butt');
        commentBtn.classList.add('comment-btn');
        commentBtn.textContent = 'Comentar';
        commentBtn.addEventListener('click', () => {
            const comment = prompt('Ingresa tu comentario:');
            if (comment) {
                imageData.comments.push(comment);
                showComments();
            }
        });

        const comments = document.createElement('div');
        comments.classList.add('comments');

        actions.appendChild(likeBtn);
        actions.appendChild(commentBtn);

        details.appendChild(actions);
        details.appendChild(comments);

        item.appendChild(img);
        item.appendChild(details);

        gallery.appendChild(item);

        function showComments() {
            comments.innerHTML = '';
            imageData.comments.forEach(comment => {
                const p = document.createElement('p');
                p.textContent = comment;
                comments.appendChild(p);
            });
        }

        showComments();
    });
});