import { useCities } from "./CitiesDataProvider.js"
import { city } from "./City.js"

export const CityList = () => {

    const cities = useCities();
    const contentElement = document.querySelector(".container__content__cities");
    let cityHTML = ""

    cities.forEach( cityObj => {
        cityHTML += city(cityObj);
    });

    contentElement.innerHTML += cityHTML;
}