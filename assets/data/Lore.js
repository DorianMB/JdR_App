export function getLore() {
    this.lore = '';
    this.lore = {
        pnj: {
            title: "Pnj",
            subTitle: "Fiches des pnj du JdR",
            photo: 'https://media.discordapp.net/attachments/542121120405389323/634005532201713664/unknown.png',
            route: 'PnjList',
            pnjs: {
                Garrett: {
                    firstname: 'Garrett',
                    lastname: 'Hawke-Amell',
                    fullname: 'Garrett Hawke-Amell',
                    photo: 'https://media.discordapp.net/attachments/542121120405389323/634005532201713664/unknown.png',
                    description: 'Fils aîné et Héritier de Léandra Amell. Demi-Daeva de Balerion. Maréchal destitué.',
                },
                Aelysanne: {
                    firstname: 'Aelysanne',
                    lastname: 'Velaryo',
                    fullname: 'Princesse Aelysanne de la Maison Velaryo',
                    photo: 'https://media.discordapp.net/attachments/542121120405389323/634011877906841630/14d28fd4c787e2298d6a44274d53705f.png',
                    description: 'Dragonnière de Meleys, jumelle d\'Aeryon Velaryo, dragonnier d\'Arrax.',
                },
                Meraxes: {
                    firstname: 'Meraxes',
                    lastname: 'Velaryo',
                    fullname: 'Meraxes Velaryo',
                    photo: 'https://media.discordapp.net/attachments/542121120405389323/634014313316876289/unknown.png',
                    description: 'Second dragon de l\'Impératrice, premier oeuf de Balerion, née avant la Libération. A disparu il y a presque 10 ans maintenant.',
                },
            },
        },
        cities: {
            title: "Lieux",
            subTitle: "Lieux / Villes / Villages du JdR",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        history: {
            title: "Histoire",
            subTitle: "Histoire et légendes du JdR",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        magicObject: {
            title: "Objets magiques",
            subTitle: "Listes des objets magiques connus",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        Weapon: {
            title: "Armes",
            subTitle: "Listes des armes connus",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        Armory: {
            title: "Armures",
            subTitle: "Listes des armures connus",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        Race: {
            title: "Races",
            subTitle: "Listes des races rencontrées",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
        Class: {
            title: "Classes",
            subTitle: "Listes des classes rencontrées",
            photo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lore_Podcast_logo.jpg',
        },
    }
    return this.lore;
}
