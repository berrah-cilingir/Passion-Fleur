// création d'un tableau, contenant des objets clés valeurs.
// Dedans cette objet nous retouvons pour chaque image, son titre,sa description, le lien,l'auteur, la licence,la mention légal et enfin la source de l'image.
let fleurs = [
    {
        titre: "Secret de rose",
        description: "Cette image représente une rose Rouge. Une rose rouge symbolise principalement l’amour passion et sincère, elle exprime des sentiments profondes, une admiration intense. Celle-ci est souvent offerte lors des déclarations romantiques ou occasions spéciales.  Elle peut-être nuancé par sa couleur de son rouge. Une rose rouge foncé peut représenter une intensité émotionnelle plus forte comme le regret ou chagrin. Non seulement ,le nombre de rose offerte change la signification, par exemple ; offrir 3 roses signifie «je t’aime» .Ainsi cette rose illustre ma passion pour les fleurs car elle représente bien la beauté de la nature et permet de comprendre que chaque détails d’une rose le rend symbolique.",
        lien: "./images/rose-3.jpg",
        auteur: "AUTEUR: Peggychoucair",
        mention_legal: "LICENCE: Pixabay License – libre de droits, usage commercial et personnel autorisé, pas besoin d’attribution",
        source: "https://pixabay.com/fr/photos/rose-fleur-rose-rouge-fleur-de-rose-3802424/"
    },
    {
        titre: "Rose",
        description: "Cette image représente une rose rose. La signification d’une rose rose est douce : elle symbolise la tendresse et l’affection. Sa nuance peut varier selon son intensité : une rose très claire évoque l’innocence et l’admiration discrète, tandis qu’une teinte plus soutenue représente la reconnaissance profonde. Cette rose décrit ma passion, car d’une part c’est ma fleur préférée, et d’autre part elle reflète des valeurs qui me sont chères, comme la reconnaissance, la délicatesse et le respect.  ",
        lien: "./images/rose-2.jpg",
        auteur: "AUTEUR: Pixabay users",
        mention_legal:"LICENCE: Pixabay License – libre de droits, usage commercial et personnel autorisé, pas besoin d’attribution",
        source:"https://pixabay.com/fr/photos/rose-p%c3%a9tales-fleur-rose-rose-782513/"
    },
    {
        titre:"Ma rose fané ",
        description:"Cette image représente une rose fané c’est à dire qu’elle a perdu toute sa beauté et fraicheur. Elle peut avoir plusieurs signification comme un amour qui se termine ou encore le temps qui passe, la tristesse, le regret. Cette fleur représente ma passion car sa montre que une fleur n’est pas juste jolie mais qu’elle aussi éphémère tout comme nous. Cette rose fané, je l’apprécie beaucoup, car même si que sa beauté ne reste pas, les souvenirs y restent.",
        lien:"./images/rose-5.jpg",
        auteur:"AUTEUR: experimentMR",
        mention_legal:"LICENCE : Pixabay License – libre de droits, usage commercial et personnel autorisé, pas besoin d’attribution",
        source:"https://pixabay.com/fr/photos/fleur-bloom-rose-botanique-fleurir-7607979/"
    },
    {
        titre:"Une rose symbolique",
        description:"Cette image représente une rose dans l’obscurité. Elle évoque ma passion car celle-ci à un message très important. Elle montre que même lors des moments difficiles de la vie, il existe toujours un moyen de le rendre meilleur. C’est ainsi que l’obscurité de l’image représente cette difficulté dans la vie et cette rose représente la beauté, l’espoir, et savoir tirer des bonnes leçon malgré ce qui peut nous arriver dans la vie.",
        lien:"./images/rose-1.jpg",
        auteur:"AUTEUR: Wyxina",
        mention_legal:"LICENCE : Pixabay License – libre de droits, usage commercial et personnel autorisé, pas besoin d’attribution",
        source:"https://pixabay.com/fr/photos/rose-rose-rose-fleur-rose-7485056/"
    },
    {
        titre:"Petale de rose",
        description:"Cette image représente des pétales de roses. Ces pétales illustrent ma passion car lorsqu’on m’offre des fleurs, je garde les pétales de roses en guise de souvenirs. Chaque pétale me rappelle alors la gentillesse, le moment, l’amour, la passion et encore plein de choses qui me rende heureuse. Une pétale de rose est aussi symbolique car elle représente la beauté éphémère.",
        lien:"./images/rose-4.jpg",
        auteur:"AUTEUR: JillWellington",
        mention_legal:"LICENCE : Pixabay License – libre de droits, usage commercial et personnel autorisé, pas besoin d’attribution",
        source:"https://pixabay.com/fr/photos/p%c3%a9tales-de-rose-rose-contexte-amour-3194062/",
    }
];

// Création d'une boucle foreach, où pour chaque objet qui est dans la variable fleurs, il va parcourir chaque objet et modifier le HTML en affichant le contenu du HTML existant dans la balise images_fleurs et afficher les différentes informations sur le site
fleurs.forEach(fleur => {
    document.querySelector('.images_fleurs').innerHTML += "<h2>"+fleur.titre+"</h2>"
    +"<p>"+fleur.description+"</p>"
    +"<img src="+fleur.lien+' alt="fleurs" class="image1">'
    +"<figure><figcaption>"+fleur.auteur+"<br>"+fleur.mention_legal+"<br>"
    +"<a href="+fleur.source+"> Source</a>"
    +"</figcaption></figure>"
} );




 