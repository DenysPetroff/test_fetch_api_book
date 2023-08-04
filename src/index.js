import { getOneCategoriesBooksFromApi } from './fetch_API_categories.js';
// let category = 'Hardcover Nonfiction';
const categoryBookContainerGellary = document.querySelector('.top-category-list');
const booksSection = document.querySelector('.container');

let categories = 'Childrens Middle Grade Hardcover';
getOneCategoriesBooksFromApi(categories).then(resp => {
    console.log('resp', resp);
    createGalleryCategoriesBooksMarkup(resp);
}).catch(error => console.log(error))


function createGalleryCategoriesBooksMarkup(data) { 
  const categoryHeader = `<h2 class="books-section-title">${categories}</h2>`;
     
   const cartBook = data.map(({_id, book_image, title, author }) => 
//    `<div class="photo-card">
//       <img src="${book_image}" alt="${title}" loading="lazy" />
//       <div class="info">
//         <p class="title-book">${title}</p>
//         <p class="author-name">${author}</p>      
//       </div>
// </div>`
   `<div class="book-card" data-id="${_id}">
         <img src="${book_image}" alt="${title}" class="book-card-img" width="300" height="300">
       <h4 class="book-card-title">${title}</h4>
        <p class="book-card-author">${author}</p>
       </div>`
   ).join('');
    categoryBookContainerGellary.innerHTML = '';
   categoryBookContainerGellary.insertAdjacentHTML('beforeend', cartBook);
   booksSection.insertAdjacentHTML('afterbegin', categoryHeader)
};

