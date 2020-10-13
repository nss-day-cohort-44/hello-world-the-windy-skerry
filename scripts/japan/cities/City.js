export const CityHTML = (cityObject) => {
    return `
    <div class="container__content__item">
        <div class="container__content__item">${cityObject.name}</div>
        <div class="item-desc"
            <img class="container__content__image"src="${cityObject.image}"</img>
        ${cityObject.desc}</div>
    </div>
    `
}