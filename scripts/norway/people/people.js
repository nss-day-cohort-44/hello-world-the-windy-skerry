export const citizensHTML = (citizens) =>{
    return`
    <div class="container__content__item" id="cities-container-content-item">${citizens.name}
    <div class="item-desc" id="cities-items-desc">${citizens.description}
      <img class="container__content__image" id="cities-content-container-image" src=${citizens.image}>
    </div>
    </div>
    `
}