

import { Landmark } from "./Landmark.js";
import { useLandmarks } from "./LandmarkDataProvider.js";

const contentElement = document.querySelector(".container__content__landmarks");

export const LandmarkList = () => {
    
    const landmarks = useLandmarks();
    
    let landmarkHTML = ""

    for (const landmark of landmarks) {
        landmarkHTML += Landmark(landmark);
    }
    contentElement.innerHTML += landmarkHTML;
};















