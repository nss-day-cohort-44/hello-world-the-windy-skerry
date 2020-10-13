import { useCitizens } from "./CitizensDataProvider.js"
import { citizen } from "./Citizen.js"

export const CitizenList = () => {

    const citizens = useCitizens();
    const contentElement = document.querySelector(".container__content__citizens");
    let citizenHTML = ""

    citizens.forEach( citizenObj => {
        citizenHTML += citizen(citizenObj);
    });

    contentElement.innerHTML += citizenHTML;
}