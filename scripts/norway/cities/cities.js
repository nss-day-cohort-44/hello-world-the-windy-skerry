export const citiesHTML = (cities) =>{
    return`
    <div class="container__content__item" id="cities-container-content-item">${cities.name}
    <div class="item-desc" id="cities-items-desc">${cities.description}
      <img class="container__content__image" id="cities-content-container-image" src=${cities.image}>
    </div>
    </div>
    `
}