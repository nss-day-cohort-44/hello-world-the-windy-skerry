const cityList = [
    {
        name: "Rome",
        desc: `Rome is the
        capital city and a special comune of Italy (named Comune di Roma Capitale) as well as the
        capital of the Lazio region. The city has been a major human settlement for almost three
        millennia. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), it is also the country's most
        populated comune. It is the third most populous city in the European Union by population within
        city limits. It is the centre of the Metropolitan City of Rome, which has a population of
        4,355,725 residents, thus making it the most populous metropolitan city in Italy. Its
        metropolitan area is the third-most populous within Italy. Rome is located in the
        central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the
        Tiber. Vatican City (the smallest country in the world) is an independent country inside the
        city boundaries of Rome, the only existing example of a country within a city; for this reason
        Rome has sometimes been defined as the capital of two states.`
    },
    {
        name: "Sicily",
        desc: `Sicily is the largest island in
        the Mediterranean Sea and one of the 20 regions of Italy. It is one of the five Italian
        autonomous regions and is officially referred to as Regione Siciliana. It has 5 million
        inhabitants. Sicily is located in the central Mediterranean Sea, south of the Italian Peninsula,
        from which it is separated by the narrow Strait of Messina. Its most prominent landmark is Mount
        Etna, the
        tallest active volcano in Europe, and one of the most active in the world, currently 3,329 m
        (10,922 ft) high. The island has a typical Mediterranean climate.`
    },
    {
        name: "Venice",
        desc: `Venice is a city in northeastern Italy and the capital of the Veneto
        region. It is situated on a group of 118 small islands that are separated by canals and
        linked by over 400 bridges. The islands are located in the shallow Venetian Lagoon, an
        enclosed bay that lies between the mouths of the Po and the Piave rivers (more exactly between
        the Brenta and the Sile). In 2018, 260,897 people resided in the Comune di Venezia, of whom
        around 55,000 live in the historical city of Venice. Together with Padua and
        Treviso, the city is included in the Padua-Treviso-Venice Metropolitan Area, which is
        considered a statistical metropolitan area, with a total population of 2.6 million.`

    }
];

export const useCities = () => {
    return cityList.slice();
}