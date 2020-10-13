export const landmarksHTML = (landmarks) =>{
    return`
    <div class="container__content__item" id="cities-container-content-item">${landmarks.name}
    <div class="item-desc" id="cities-items-desc">${landmarks.description}
      <img class="container__content__image" id="cities-content-container-image" src=${landmarks.image}>
    </div>
    </div>
    `
}