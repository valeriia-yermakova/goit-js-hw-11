import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import searchImagesByQuery from './js/pixabai-api.js';
import { createImages, clearImages, initLightbox } from './js/render-functions.js';

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.input-for-gallery');
const loader = document.querySelector('.loader');

let lightbox;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  clearImages();
  event.preventDefault();
  loader.classList.add('active');  

  const wordForSearch = input.value.trim();
  const page = 1;

  if (wordForSearch === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please fill the input',
    });
    loader.classList.remove('active'); 
    return;
  }

  searchImagesByQuery(wordForSearch, page)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        loader.classList.remove('active');  
        return;
      } else {
        createImages(data);
        iziToast.success({
          position: 'topRight',
          message: `Found ${data.total} images.`,
        });

        if (!lightbox) {
          lightbox = initLightbox();
        } else {
          lightbox.refresh(); 
        }
      }
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `An error occurred: ${error.message}`,
      });
    })
    .finally(() => {
      loader.classList.remove('active'); 
    });
}

lightbox = initLightbox();