import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
// console.log(container);

// const markup = galleryItems.map(({ original, preview, description }) => `<li class="js-target">
// <a class="js-target" href="${original}">
//       <img class="js-target" src="${preview}" data-source="${original} alt="${description}" width="300"/>
//       </a>
//     </li>`);

// container.insertAdjacentHTML('beforeend', markup.join(''))
// container.addEventListener('click', onClick);

// function onClick(evt) {
//     evt.preventDefault();
//     if (!evt.target.classList.contains("js-target")) {
//         return;
//     }
//      console.log(evt.target);
// }
const markupEl = createGalleryItemsMarkup(galleryItems);
// console.log(markupEl);
container.insertAdjacentHTML('beforeend', markupEl);
container.addEventListener('click', onClick);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ original, preview, description }) => {
            return `<li class="js-target">
<a class="js-target" href="${original}">
<img
 class="js-target"
src="${preview}"
data-source="${original}
alt="${description}"
width="300"/>
 </a>
</li>`;
        })
        .join(''); 
}
const instance = basicLightbox.create(`
    
     <img width="1280" src="" alt="">`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscPress);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscPress);
        },
    
    });

function onClick (evt) {
    evt.preventDefault();
    const datasetSource = evt.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
    }

function onEscPress(evt) {
    if (evt.code !== 'Escape') return;
    instance.close();
}
    
// console.log(instance);
// instance.show();

// console.log(galleryItems);