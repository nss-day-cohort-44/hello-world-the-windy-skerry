const landmarksCollection = [
    {
        name: "The Northern Lights",
        description: "An aurora is a natural light display in the Earth's sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic). Auroras are the result of disturbances in the magnetosphere caused by solar wind. These disturbances are sometimes strong enough to alter the trajectories of charged particles in both solar wind and magnetospheric plasma. These particles, mainly electrons and protons, precipitate into the upper atmosphere (thermosphere/exosphere). The resulting ionization and excitation of atmospheric constituents emit light of varying color and complexity. The form of the aurora, occurring within bands around both polar regions, is also dependent on the amount of acceleration imparted to the precipitating particles. Precipitating protons generally produce optical emissions as incident hydrogen atoms after gaining electrons from the atmosphere. Proton auroras are usually observed at lower latitudes.",
        image: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1474125798/canada-AURORA0916.jpg?itok=fA8a1lIm",
    },
    {
        name: "The Western Fjords",
        description: "The most dramatic and famous fjords are largely in West Norway, approximately from Stavanger to Molde. Although the western fjords vary slightly in appearance they are generally relatively narrow, surrounded by steep rock faces, tall mountains and extremely deep (particularly the middle and innermost parts). These typical features of western fjords are most pronounced at the easternmost part where fjords intersect with the highest mountains (such as Jotunheimen). Melt water from glaciers flow into major fjords such as Sognefjorden. The fjords of western Norway (represented by fjords of Geiranger and Nærøy) is a UNESCO world heritage site. ",
        image: "https://www.fjords.com/wp-content/uploads/2018/04/loenskylift-1-2000x1200.jpg",
    },
    {
        name: "Hemsedal Top 20",
        description: "Hemsedal Top 20 is an organisation of twenty mountains in the Hemsedal fell that preferably can be climbed during the summer time. The twenty peaks are each signposted with the name of the peak and the trail leading to the top is marked with either blue-painted stones or a series of cairns. A green box is situated on each peak containing a guest book.",
        image: "https://www.hemsedal.com/contentassets/6ec0082024db4b7eb5c6aeab59228e41/9076127588_1ef7c63e7e_o.jpg",
    }
]
export const landmarksArray = () =>{
    return landmarksCollection.slice()
 }