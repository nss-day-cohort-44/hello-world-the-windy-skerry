import { useCities } from "./CityDataProvider.js"
import { CityHTML } from "./City.js"

export const citiesList = () => {
    const cityContainer = document.querySelector(".container__content__cities")
    const arrayOfCities = useCities()

    let buildCityList = ""

    for (const city of arrayOfCities) {
        buildCityList += CityHTML(city)
        
    }
    cityContainer.innerHTML += buildCityList
}