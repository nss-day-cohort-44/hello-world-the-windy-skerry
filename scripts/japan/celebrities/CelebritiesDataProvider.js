const celebrities = [
    {
        name: "Hayao Miyazaki",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tuDVH0yY0cngWsaEVSBU2wHaEL%26pid%3DApi&f=1",
        desc: `Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio
        Ghibli, a film and animation studio, he has attained international acclaim as a masterful
        storyteller and as a maker of animated feature films, and is widely regarded as one of the most
        accomplished filmmakers in the history of animation.`
    },
    {
        name: "Yoko Ono",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.b6xHKeDcb73mPdJLTVwMGgHaEx%26pid%3DApi&f=1",
        desc: `Yoko Ono Lennon is a Japanese multimedia artist, singer, songwriter and
        peace activist. Her work also encompasses performance art, which she performs in both English
        and Japanese, and filmmaking. She was married to English singer-songwriter John Lennon of the
        Beatles from 1969 until his murder in 1980.`
    },
    {
        name: "Hideo Kojima",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GmJa7KASpVnvC1_4QiZEJAHaEK%26pid%3DApi&f=1",
        desc: `Hideo Kojima is a Japanese video game designer.Regarded as an auteur of video games, he
        developed a strong passion for action/adventure
        cinema and literature during his childhood and adolescence. In 1986, he was hired by Konami,
        for which he designed and wrote Metal Gear (1987) for the MSX2, a game that laid the
        foundations for stealth games and the Metal Gear series, his best known and most appreciated
        works. The title that consecrated him as one of the most acclaimed video game designers is
        Metal Gear Solid (1998) for PlayStation. He is also known for producing the Zone of the
        Enders series, as well as writing and designing Snatcher (1988) and Policenauts (1994),
        graphic adventure games regarded for their cinematic presentation.`
    }
]

export const useCelebrities = () => {
    return celebrities.slice()
}