export const landmark = (landmarkObj) => {

    return `<div class="container__content__item">${landmarkObj.name}
        <div class="item-desc">
        ${landmarkObj.desc}
        </div>
    </div> `
}