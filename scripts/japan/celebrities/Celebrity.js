export const CelebrityHTML = (celebrityObject) => {
    return `
    <div class="container__content__item">
        <div class="container__content__item">${celebrityObject.name}</div>
        <div class="item-desc">
            <img class="container__content__image"src="${celebrityObject.image}"</img>
        ${celebrityObject.desc}</div>
    </div>
    `
}