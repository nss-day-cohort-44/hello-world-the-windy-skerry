import {landmarksArray} from './landmarksdataprovider.js'
import {landmarksHTML} from './landmarks.js'

export const LandmarksFinalHTML = () =>{
    // where do we want to add the html??
    const contentElement = document.querySelector(".container__content__landmarks")
    // we need to add the data now, to start we have to assign it to a variable
    const landmarksLoop = landmarksArray()
    // now make an empty string to store the html
    let landmarksHtmlRep = ""

    for (const landmarks of landmarksLoop){
        landmarksHtmlRep += landmarksHTML(landmarks)
    }

    contentElement.innerHTML +=
    `${landmarksHtmlRep}`
}
