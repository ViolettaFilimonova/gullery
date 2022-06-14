import items from './items.js'

let itemEl = items.map((item) => {
   if (item.type === 'img'){
       return `
        <figure class="gallery__card">
            <img class="gallery__${item.type}" src="${item.src}" alt="${item.type}"/>
            <figcaption class="gallery__text">${item.text}</figcaption>
        </figure>
    `
   }else if (item.type === 'audio'){
       return `
        <figure class="gallery__card">
            <audio class="gallery__${item.type}" controls src="${item.src}"></audio>
            <figcaption class="gallery__text">${item.text}</figcaption>
        </figure>
    `
   }else if (item.type === 'video'){
       return `
        <figure class="gallery__card">
            <video class="gallery__${item.type}" controls src="${item.src}"></video>
            <figcaption class="gallery__text">${item.text}</figcaption>
        </figure>
    `
   }
}).join('')
// const card = document.body.querySelector('.gallery__cards').insertAdjacentHTML('afterbegin', itemEl)
export default itemEl