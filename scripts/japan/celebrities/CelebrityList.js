import { useCelebrities } from "./CelebritiesDataProvider.js"
import { CelebrityHTML } from "./Celebrity.js"

export const celebritiesList = () => {
    const celebrityContainer = document.querySelector(".container__content__citizens")
    const arrayOfCelebrities = useCelebrities()

    let buildCelebrityList = ""

    for (const celebrity of arrayOfCelebrities) {
        buildCelebrityList += CelebrityHTML(celebrity)
        
    }
    celebrityContainer.innerHTML += buildCelebrityList
}