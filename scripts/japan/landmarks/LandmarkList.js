import { useLandmarks } from "./LandmarkDataProvider.js"
import { LandmarkHTML } from "./Landmark.js"

export const landmarkList = () => {
    const landmarkContainer = document.querySelector(".container__content__landmarks")
    const arrayOfLandmarks = useLandmarks()

    let buildLandmarkList = ""

    for (const landmark of arrayOfLandmarks) {
        buildLandmarkList += LandmarkHTML(landmark)
        
    }
    landmarkContainer.innerHTML += buildLandmarkList
}