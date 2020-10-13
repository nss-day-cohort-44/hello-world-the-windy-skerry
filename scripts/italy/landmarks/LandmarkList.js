import { useLandmarks } from "./LandmarksDataProvider.js"
import { landmark } from "./Landmark.js"

export const LandmarkList = () => {

    const landmarks = useLandmarks();
    const contentElement = document.querySelector(".container__content__landmarks");
    let landmarkHTML = ""

    landmarks.forEach( landmarkObj => {
        landmarkHTML += landmark(landmarkObj);
    });

    contentElement.innerHTML += landmarkHTML;
}