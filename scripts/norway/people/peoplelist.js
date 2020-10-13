import {citizensArray} from './peopledataprovider.js'
import {citizensHTML} from './people.js'

export const CitizensFinalHTML = () =>{
    // where do we want to add the html??
    const contentElement = document.querySelector(".container__content__citizens")
    // we need to add the data now, to start we have to assign it to a variable
    const citizensLoop = citizensArray()
    // now make an empty string to store the html
    let citizensHtmlRep = ""

    for (const citizens of citizensLoop){
        citizensHtmlRep += citizensHTML(citizens)
    }

    contentElement.innerHTML +=
    `${citizensHtmlRep}`
}
