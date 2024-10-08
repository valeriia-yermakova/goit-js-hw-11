export default function searchImagesByQuery(query, page) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45506482-0746cd613ccb32219c9653431';

  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`
  )
  .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json(); 
  })
  .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found.');
      }
      return data; 
  })
  .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `An error occurred: ${error.message}`,  
      });
      throw error; 
  });
}