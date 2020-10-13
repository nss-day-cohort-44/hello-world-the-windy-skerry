const citizensCollection = [
    {
        name: "Kristofer Hivju",
        description: "A second-generation Norwegian actor, Kristofer Hivju was born on 7 December, 1978 in Oslo. He is the son of actors Lieselotte Holmene and Erik Hivju, a prominent character actor who appeared with his son in the short film Flax, where Kristofer shared screenwriting credit with director Bård Ivar Engelsås. Everyone's favorite Wildling",
        image: "https://cdn1-www.superherohype.com/assets/uploads/2019/03/Tormund.jpg",
    },
    {
        name: "Jo Nesbo",
        description: "Jo Nesbø is a Norwegian writer, musician, economist, and former soccer player and reporter. More than 3 million copies of his novels had been sold in Norway as of March 2014;[1] his work has been translated into over 40 languages, and by 2017 had sold some 33 million copies worldwide.[2][3] Known primarily for his crime novels featuring Inspector Harry Hole, Nesbø is also the main vocalist and songwriter for the Norwegian rock band Di Derre. In 2007 he released his first children's book, Doktor Proktors Prompepulver (English translation: Doctor Proctor's Fart Powder). The 2011 film Headhunters is based on Nesbø's novel Hodejegerne (The Headhunters).",
        image: "https://www.telegraph.co.uk/content/dam/health-fitness/2019/07/18/Jo_Nesbo-c-Thron_Ullberg_trans_NvBQzQNjv4Bq6ta6VkJkVBay2a67FReGwLCFR_vzwqxiOTY3FaDxWyE.jpg?imwidth=450",
    },
    {
        name: "Röyksopp",
        description: "Röyksopp are a Norwegian electronic music duo from Tromsø in Troms og Finnmark, formed in 1998. The duo consists of Svein Berge and Torbjørn Brundtland. Røyksopp is the Norwegian word for the class of mushrooms known as puffballs, but the band's name substitutes ö for the second letter (in place of ø).",
        image: "http://1.bp.blogspot.com/__AsjfaryP4s/R57jee4TyaI/AAAAAAAAAAM/WDpK4GjsAxA/s320/geico_caveman.03.jpg",
    }
]
export const citizensArray = () =>{
    return citizensCollection.slice()
 }