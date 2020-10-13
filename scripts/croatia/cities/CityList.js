

import { City } from "./City.js";
import { useCities } from "./CityDataProvider.js";

const contentElement = document.querySelector(".container__content__cities");


export const CityList = () => {
    
    const cities = useCities();
   
    let cityHTML = ""
    
    for (const city of cities) {
        cityHTML += City(city);
    }
    contentElement.innerHTML += cityHTML;

};






