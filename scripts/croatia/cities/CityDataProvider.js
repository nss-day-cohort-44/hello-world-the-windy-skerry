const cityList = [
    {
        name: "Dubrovnik",
        desc: "Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It's known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is lined with shops and restaurants.",
        
        
    },
    {
        name: "Pula",
        desc:"Pula, a seafront city on the tip of Croatia’s Istrian Peninsula, is known for its protected harbor, beach-lined coast and Roman ruins. Settled in the prehistoric era and valued for its strategic location, Pula has been occupied, destroyed and rebuilt numerous times. The Romans, Ostrogoths and Venetians, as well as the Allied Forces in World War II, have each administered the city.",
        
    },
    {
        name: "Split",
        desc: "Split is Croatia's second-largest city and the largest city in the Dalmatia region. It lies on the eastern shore of the Adriatic Sea and is spread over a central peninsula and its surroundings."
        
    },

]

export const useCities = () => {
    return cityList.slice();
}

