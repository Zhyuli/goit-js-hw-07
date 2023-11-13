import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
// console.log(container);
const markupEl = createGalItMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markupEl);
container.addEventListener('click', onClick);

function createGalItMarkup (items) {
    return items
        .map(({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class="galllery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}
         alt="${description}"
        />
 </a>
</li>`
        )
        .join('')
}

function onClick (evt) {
    evt.preventDefault();

    // if (evt.target.nodeName !== "IMG") return;
    const isImg = evt.target.classList.contains('gallery__image');
    if (!isImg) return;
    
    const currentImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${currentImg}" width="1280" height="auto"/>`,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', onEscPress);
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', onEscPress);
            },
        }
    );
    instance.show();
    
    function onEscPress(evt) {
        const ESC = 'Escape';
        const isEsc = evt.code === ESC;
    if (isEsc) return;
    instance.close();
}
}
    



// console.log(galleryItems);