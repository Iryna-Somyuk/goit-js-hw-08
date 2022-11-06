// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryImg = document.querySelector(".gallery");

const markUpGallery = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__list"><a class="gallery__item" href = "${original}">
<img class= "gallery__image" src = "${preview}" 
 alt = "${description}"/></a></div>`
);
galleryImg.insertAdjacentHTML("beforeend", markUpGallery.join(""));

//console.log(SimpleLightbox);
new SimpleLightbox(".gallery a", {
  captionPosition: 'bottom',
  captionsData: "alt",
  captionDelay: 250,
});