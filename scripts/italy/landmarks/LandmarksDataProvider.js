const landmarkList = [
    {
        name: "The Colosseum",
        desc: `The Colosseum, also known as the Flavian
        Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy.
        Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the
        largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators. The Colosseum
        is just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and
        was completed in AD 80 under his successor and heir, Titus. Further modifications were made
        during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty,
        and the amphitheatre was named in Latin for its association with their family name (Flavius).`
    },
    {
        name: "St. Peter's Basilica",
        desc: `<p>The Papal Basilica of Saint Peter in the Vatican, or simply Saint Peter's Basilica, is a
        church built in
        the Renaissance style located in Vatican City, the papal enclave which is within the city of
        Rome.</p>
        <p>Designed principally by Donato Bramante, Michelangelo, Carlo Maderno and Gian Lorenzo
        Bernini,
        St. Peter's is the most renowned work of Renaissance architecture and the largest church in
        the world. While it is neither the mother church of the Catholic Church nor the cathedral of
        the Diocese of Rome (these equivalent titles being held by the Archbasilica of Saint John
        Lateran in Rome), St. Peter's is regarded as one of the holiest Catholic shrines. It has
        been
        described as "holding a unique position in the Christian world" and as "the greatest of all
        churches of Christendom".</p>`
    },
    {
        name: "Pantheon",
        desc: `The Pantheon is a former Roman temple, now a Catholic church (Basilica
            di Santa Maria ad Martyres or Basilica of St. Mary and the Martyrs), in Rome, Italy, on the site
            of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus (27 BC – 14
            AD). It was rebuilt by the emperor Hadrian and probably dedicated about 126 AD. Its date of
            construction is uncertain, because Hadrian chose not to inscribe the new temple but rather to
            retain the inscription of Agrippa's older temple, which had burned down.`
    }
];

export const useLandmarks = () => {
    return landmarkList.slice();
}

/* 
                <div class="container__content__item">The Colosseum
                    <div class="item-desc">
                    </div>
                </div>
                <div class="container__content__item">St. Peter's Basilica
                    <div class="item-desc">
                        
                    </div>
                </div>
                <div class="container__content__item">Pantheon
                    <div class="item-desc">
                        
                    </div>
                </div> */