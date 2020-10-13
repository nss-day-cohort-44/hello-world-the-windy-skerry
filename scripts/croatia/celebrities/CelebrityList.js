

import { Celebrity } from "./Celebrity.js";
import { useCelebrity } from "./CelebritiesDataProvider.js";

const contentElement = document.querySelector(".container__content__citizens");

export const CelebrityList = () => {

    const celebrities = useCelebrity();
    
    let celebrityHTML = ""

    for (const celeb of celebrities) {
        celebrityHTML += Celebrity(celeb);
    }
    contentElement.innerHTML += celebrityHTML;
};






