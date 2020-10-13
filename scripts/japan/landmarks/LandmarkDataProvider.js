const landmarks = [
    {
        name: "Fushimi Inari",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ixeEfJuae7vNkuyPWdcE_wHaE8%26pid%3DApi&f=1",
        desc: `Fushimi Inari-taisha (伏見稲荷大社) is the head shrine of the kami Inari, located in Fushimi-ku,
        Kyoto, Kyoto Prefecture, Japan. The shrine sits at the base of a mountain also named Inari which
        is 233 metres (764 ft) above sea level, and includes trails up the mountain to many smaller
        shrines which span 4 kilometres (2.5 mi) and take approximately 2 hours to walk up.`
    },
    {
        name: "Shibuya Crossing",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.e4lQ0MrthavnqxAUJ6L-_gHaEs%26pid%3DApi&f=1",
        desc: ` Shibuya (渋谷 Shibuya-ku) is a special ward in Tokyo, Japan. A major commercial and business
        centre, it houses the two busiest railway stations in the world, Shinjuku Station (southern
        half) and Shibuya Station.

        As of May 1, 2016, it has an estimated population of 221,801 and a population density of
        14,679.09 people per km2 (38,018.7/sq mi). The total area is 15.11 km2 (5.83 sq mi).

        The name "Shibuya" is also used to refer to the shopping district which surrounds Shibuya
        Station. This area is known as one of the fashion centers of Japan, particularly for young
        people, and as a major nightlife area.`
    },
    {
        name: "Mt. Fuji",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3E_WuyBHBl3kXto8GvuOIgHaD6%26pid%3DApi&f=1",
        desc: `Mount Fuji, located on the island of Honshū, is the highest mountain in Japan, standing 3,776.24
        m (12,389.2 ft). It is the second-highest volcano located on an island in Asia (after Mount
        Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth. Mount Fuji
        is an active stratovolcano that last erupted from 1707 to 1708. The mountain stands about
        100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's
        exceptionally symmetrical cone, which is snow-capped for about five months of the year, is
        commonly used as a cultural icon of Japan and it is frequently depicted in art and photography,
        as well as visited by sightseers and climbers.`
    }
]

export const useLandmarks = () => {
    return landmarks.slice()
}