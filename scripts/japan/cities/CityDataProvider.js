const cities = [
    {
        name: "Kyoto",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjohanfourie.files.wordpress.com%2F2015%2F07%2Fkyoto.jpeg&f=1&nofb=1",
        desc: `Kyoto, officially Kyoto City, is the capital city of Kyoto Prefecture in Japan. Located in the
        Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area
        along with Osaka and Kobe. As of 2018, the city had a population of 1.47 million.

        In 794, Kyoto (then known as Heian-kyō) was chosen as the new seat of Japan's imperial court.
        The original city was arranged in accordance with traditional Chinese feng shui following the
        model of the ancient Chinese capital of Chang'an. The Imperial Palace faced south, resulting in
        Ukyō (the right sector of the capital) being on the west while Sakyō (the left sector) is on the
        east. The streets in the modern-day wards of Nakagyō, Shimogyō, and Kamigyō-ku still follow a
        grid pattern.`
    },
    {
        name: "Nara",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6b2P9ZcwcjlIVX5Dt1e_sgHaE8%26pid%3DApi&f=1",
        desc: `Nara is the capital city of Nara Prefecture, Japan.

        As of 1 April 2019, Nara has an estimated population of 359,666, making it the largest city in
        Nara Prefecture and sixth-largest in the Kansai region of Honshu. Nara is a core city located in
        the northern part of Nara Prefecture bordering the Kyoto Prefecture.

        Nara was the capital of Japan during the Nara period from 710 to 794 as the seat of the Emperor
        before the capital was moved to Kyoto. Nara is home to eight temples, shrines, and ruins,
        specifically Tōdai-ji, Saidai-ji, Kōfuku-ji, Kasuga Shrine, Gangō-ji, Yakushi-ji, Tōshōdai-ji,
        and the Heijō Palace, together with Kasugayama Primeval Forest, collectively form the Historic
        Monuments of Ancient Nara, a UNESCO World Heritage Site.`
    },
    {
        name: "Hakone",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VPZW3XUhlMBAaCRWT1troAHaE5%26pid%3DApi&f=1",
        desc: `Hakone is a town in Kanagawa Prefecture, Japan. As of June 2012, the town
        had an estimated population of 13,492, and a population density of 145 persons per km². The
        total area is 92.82 km2 (35.84 sq mi). Hakone has been designated as a Japanese National Geopark
        by the Japanese Geoparks Network.

        Hakone is to a great degree regarded as a traveler destination; Mt. Fuji can be seen when taking
        a day trip from Tokyo. In addition to hot springs, museums and other recreation activities,
        Hakone is known for its scenery during all four seasons.`
    }
]

export const useCities = () => {
    return cities.slice()
}