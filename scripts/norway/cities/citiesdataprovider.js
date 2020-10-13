const citiesCollection = [
    {
        name: "Oslo",
        description: "Oslo is the capital, most populous, and primate city of Norway. It constitutes both a county and a municipality. As of 27 February 2020, the municipality of Oslo had a population of 693,491, while the population of the city's urban area of 4 November 2019 was 1,019,513. The metropolitan area had an estimated population of 1.71 million.",
        image: "https://www.tripsavvy.com/thmb/0TitL6I-PN5kDB5vvx2ebcrFLIU=/3865x2576/filters:fill(auto,1)/oslo-city-hall-at-dawn-682203953-598a57d6054ad90011368662.jpg",
    },
    {
        name: "Tromsø",
        description: "Tromsø is a city in Tromsø Municipality in Troms og Finnmark county, Norway. The city is the administrative centre of the municipality as well as the administrative centre of Troms county. The Diocese of Nord-Hålogaland and its Bishop are based at the Tromsø Cathedral in the city. The city is located on the island of Tromsøya which sits in the Tromsøysundet strait, just off the mainland of Northern Norway. The mainland suburb of Tromsdalen is connected to the city centre on Tromsøya by the Tromsø Bridge and the Tromsøysund Tunnel. The suburb of Kvaløysletta on the island of Kvaløya is connected to the city centre by the Sandnessund Bridge.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tromso_Troms%C3%B8_Norway_tunliweb_02.jpg/1200px-Tromso_Troms%C3%B8_Norway_tunliweb_02.jpg",
    },
    {
        name: "Bergen",
        description: "Bergen is a city and municipality in Vestland county on the west coast of Norway. At the end of 2019, the municipality's population was 283,929. Bergen is the second-largest city in Norway. The municipality covers 465 square kilometres (180 sq mi) and is on the peninsula of Bergenshalvøyen. The city centre and northern neighbourhoods are on Byfjorden, 'the city fjord', and the city is surrounded by mountains; Bergen is known as the 'city of seven mountains'. Many of the extra-municipal suburbs are on islands. Bergen is the administrative centre of Vestland county. The city consists of eight boroughs: Arna, Bergenhus, Fana, Fyllingsdalen, Laksevåg, Ytrebygda, Årstad, and Åsane.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Bergen_by_night.jpg",
    }
]
export const citiesArray = () =>{
    return citiesCollection.slice()
 }