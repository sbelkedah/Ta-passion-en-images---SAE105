// 1. Tableau contenant les métadonnées de chaque album (titres, image, artiste, label, crédits et liens)
let images = [
    {
      titre: "Good Kid, M.A.A.D City",
      chemin: "images/IMG1.jpg",
      artiste: "Kendrick Lamar",
      label: "Top Dawg Ent. / Aftermath / Interscope",
      source: "https://kendricklamar.lnk.to/goodkidmaadcity"
    },
    {
      titre: "Igor",
      chemin: "images/IMG2.jpg",
      artiste: "Tyler, The Creator",
      label: "Columbia Records",
      source: "https://tylerthecreator.lnk.to/IGOR"
    },
    {
      titre: "Graduation",
      chemin: "images/IMG3.jpg",
      artiste: "Kanye West",
      label: "Roc-A-Fella",
      source: "https://open.spotify.com/intl-fr/album/4SZko61aMnmgvNhfhgTuD3?trackId=4UQMOPSUVJVicIQzjAcRRZ"
    }
];

// 2. Tableau stockant les textes de description de chaque album, avec l’intégration de liens HTML pour illustrer mon propos
let descriptionsImages = [
    "<a href='https://fr.wikipedia.org/wiki/Kendrick_Lamar' target='_blank'>Kendrick Lamar</a> est un rappeur originaire de Compton, aux États-Unis, et une figure majeure de la <a href='https://fr.wikipedia.org/wiki/Rap_West_Coast' target='_blank'>West Coast</a>. Cet album m’a particulièrement marqué, car il est sorti au début de la décennie passée, à une période où je découvrais la musique de tous genres et surtout le rap. Avant, je n’en écoutais pas vraiment seul, plutôt à la télévision ou avec mon père. Ce qui m’a marqué dans cet album, ce sont les <a href='https://www.youtube.com/watch?v=GF8aaTu2kg0&list=RDGF8aaTu2kg0&start_radio=1' target='_blank'>sonorités</a> qu’on y trouve, à la fois homogènes et différentes d’un morceau à l’autre. C’est un album qui raconte une véritable histoire, ce qui crée une curiosité naturelle lorsqu’on écoute les paroles. Kendrick Lamar parvient à raconter tout cela de manière très fluide à travers son rap. À huit ou neuf ans, je me concentrais surtout sur la production, car je ne comprenais pas l’anglais. Cet album m’a poussé à lire les paroles, à m’intéresser davantage au milieu de la musique et à toujours essayer de comprendre un maximum ce qui est dit. Au fil de la décennie passée, Kendrick Lamar est ainsi devenu mon artiste préféré, à travers une discographie que je considère comme sans faute, ou presque.",
    
    "<a href='https://fr.wikipedia.org/wiki/Tyler,_The_Creator' target='_blank'>Tyler, The Creator</a> est un artiste originaire de Los Angeles, connu pour sa créativité et son univers très personnel. <a href='https://www.youtube.com/watch?v=HmAsUQEFYGI' target='_blank'>IGOR</a> est son sixième album, sorti en 2019. J’ai sélectionné cet album parmi les trois, car je trouve qu’il a marqué non seulement ma génération, mais qu’il a aussi touché un nouveau public, dont moi. J’aimais déjà beaucoup son précédent album <a href='https://fr.wikipedia.org/wiki/Flower_Boy' target='_blank'>Flower Boy</a>, mais il ne m’a pas autant marqué que celui-ci. Le mélange des genres et des sonorités, poussé à travers sa voix souvent <a href='https://fr.wikipedia.org/wiki/Pitch_shift' target='_blank'>pitchée</a> vers le haut, crée une expérience que je n’avais encore jamais écoutée. Le rythme de l’album est vraiment très bon, je ne m’ennuie jamais et à chaque fois que je lance le premier morceau, je finis la plupart du temps par écouter l’album en entier. Aujourd’hui, à l’ère du streaming, il est très difficile de sortir un album où j’aime tous les morceaux, et ici Tyler, The Creator a réussi à le faire presque à la perfection. Si vous ne l’avez toujours pas écouté, allez-y les yeux fermés, c’est une valeur sûre.",
    
    "<a href='https://fr.wikipedia.org/wiki/Kanye_West' target='_blank'>Kanye West</a> est un rappeur et producteur originaire de Chicago, aux États-Unis. Graduation est son troisième album studio, sorti en 2007. J’ai choisi de parler de cet album, car je l’ai découvert au fur et à mesure que je grandissais, même si j’avais à peine un an à sa sortie. C’est un album iconique que j’écoute toujours aujourd’hui, 20 ans après, avec des morceaux connus du public comme <a href='https://www.youtube.com/watch?v=ila-hAUXR5U' target='_blank'>Flashing Lights</a>, <a href='https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=RDPsO6ZnUZI0g&start_radio=1' target='_blank'>Stronger</a> ou <a href='https://www.youtube.com/watch?v=MxEjnYdfLXU&list=RDMxEjnYdfLXU&start_radio=1' target='_blank'>I Wonder</a>. Cet album me met dans une très bonne ambiance, et il a très peu vieilli, voire pas du tout. Les productions sont folles, ce qui n’est pas étonnant venant de l’un des meilleurs producteurs du 21ᵉ siècle. Kanye a eu énormément de controverses ces dernières années, et à juste titre, on ne peut pas lui enlever ça, mais la période des années 2000 reste irréprochable, Graduation est un album culte à tous les niveaux. Comme celui de Tyler, il s’écoute de A à Z sans broncher, un vrai classique.",
];




