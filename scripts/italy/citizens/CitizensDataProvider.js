const citizenList = [
    {
        name: "Julius Ceasar",
        desc: `<p>Gaius Julius Caesar (12 July 100 BC
            – 15 March 44 BC) was a Roman general and statesman who played a critical role in the events
            that led to the demise of the Roman Republic and the rise of the Roman Empire.</p>
            <p>In 60 BC, Caesar, Crassus and Pompey formed the First Triumvirate, a political alliance that
            dominated Roman politics for several years. Their attempts to amass power as Populares were
            opposed by the Optimates within the Roman Senate, among them Cato the Younger with the
            frequent support of Cicero. Caesar rose to become one of the most powerful politicians in
            the Roman
            Republic through a string of military victories in the Gallic Wars, completed by 51 BC,
            which greatly extended Roman territory. During this time he both invaded Britain and built a
            bridge across the Rhine river. These achievements and the support of his veteran army
            threatened to
            eclipse the standing of Pompey, who had realigned himself with the Senate after the death of
            Crassus in 53 BC. With the Gallic Wars concluded, the Senate ordered Caesar to step down
            from his military command and return to Rome. Leaving his command in Gaul would mean losing
            his
            immunity to criminal prosecution by his enemies; knowing this, Caesar openly defied the
            Senate's authority by crossing the Rubicon and marching towards Rome at the head of an army.
            This
            began Caesar's civil war, which he won, leaving him in a position of near unchallenged power
            and influence.</p>`
    },
    {
        name: "Augustus",
        desc: `Augustus (23 September 63 BC – 19
            August AD 14) was the first Roman emperor, reigning from 27 BC until his death in AD 14.
            His status as the founder of the Roman Principate has consolidated an enduring legacy as one of
            the most effective and controversial leaders in human history. The reign of Augustus
            initiated an era of relative peace known as the Pax Romana. The Roman world was largely free
            from large-scale conflict for more than two centuries, despite continuous wars of imperial
            expansion on the Empire's frontiers and the year-long civil war known as the "Year of the Four
            Emperors" over the imperial succession.`
    },
    {
        name: "Diocletian",
        desc: `Diocletian (22 December c. 244 – 3 December 311) was a Roman emperor from 284
        to 305. Born to
        a family of low status in Dalmatia, Diocletian rose through the ranks of the military to become
        a cavalry commander of the Emperor Carus's army. After the deaths of Carus and his son Numerian
        on campaign in Persia, Diocletian was proclaimed emperor. The title was also claimed by Carus's
        surviving son, Carinus, but Diocletian defeated him in the Battle of the Margus.`
    }
];

export const useCitizens = () => {
    return citizenList.slice();
}

                /* <div class="container__content__item">Julius Ceasar
                    <div class="item-desc">
                        
                    </div>
                </div>
                <div class="container__content__item">Augustus
                    <div class="item-desc"></div>
                </div>
                <div class="container__content__item">Diocletian
                    <div class="item-desc"></div>
                </div> */