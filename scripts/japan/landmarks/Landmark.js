export const LandmarkHTML = (landmarkObject) => {
    return `
    <div class="container__content__item">
        <div class="container__content__item">${landmarkObject.name}</div>
        <div class="item-desc">
        <img class="container__content__image"src="${landmarkObject.image}"</img>
        ${landmarkObject.desc}</div>
    </div>
    `
}