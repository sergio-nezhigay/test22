// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const galleryItemsHtml = galleryItems.reduce((acc, galleryItem) => {
  return acc + galleryItemHTML(galleryItem);
}, '');

galleryEl.innerHTML = galleryItemsHtml;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryItemHTML(galleryItem) {
  return `<li>
              <a class="gallery__link" href="${galleryItem.original}">
                <img
                  class="gallery__image"
                  src="${galleryItem.preview}"
                  alt="${galleryItem.description}"
                />
              </a>
            </li>  
            `;
}
