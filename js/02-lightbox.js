import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const container = document.querySelector('.gallery');
console.log(container);

const markupEl = createGalItMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markupEl);

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); when using the standalone variant (`simple-lightbox(.min).js`)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function createGalItMarkup (items) {
    return items
        .map(({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class="galllery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
        />
 </a>
</li>`
        )
        .join('')
}



// console.log(galleryItems);
