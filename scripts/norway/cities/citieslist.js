import {citiesArray} from './citiesdataprovider.js'
import {citiesHTML} from './cities.js'

export const CitiesFinalHTML = () =>{
    // where do we want to add the html??
    const contentElement = document.querySelector(".container__content__cities")
    // we need to add the data now, to start we have to assign it to a variable
    const citiesLoop = citiesArray()
    // now make an empty string to store the html
    let citiesHtmlRep = ""

    for (const cities of citiesLoop){
        citiesHtmlRep += citiesHTML(cities)
    }

    contentElement.innerHTML +=
    `${citiesHtmlRep}`
}
