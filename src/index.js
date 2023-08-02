import { getOneCategoriesBooksFromApi } from './fetch_API_categories.js';
// let category = 'Hardcover Nonfiction';
const categoryBookContainerGellary = document.querySelector('.gallery-category-books-container-js');

let categories = 'Childrens Middle Grade Hardcover';
getOneCategoriesBooksFromApi(categories).then(resp => {
    console.log('resp', resp);
    createGalleryCategoriesBooksMarkup(resp);
}).catch(error => console.log(error))


 function createGalleryCategoriesBooksMarkup(data) { 
     
   const cartBook = data.map(({book_image, title, author }) => `
<div class="photo-card">
      <img src="${book_image}" alt="${title}" loading="lazy" />
      <div class="info">
        <p class="title-book">${title}</p>
        <p class="author-name">${author}</p>      
      </div>
</div>
    `).join('');
    categoryBookContainerGellary.innerHTML = '';
    categoryBookContainerGellary.insertAdjacentHTML('beforeend', cartBook);
};

