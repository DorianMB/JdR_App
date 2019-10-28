export function getFiles() {
    this.files = '';
    this.files = {
        Kira: {
            firstname: 'Kira',
            lastname: '',
            fullname: 'Sha Kira',
            photo: 'https://media.discordapp.net/attachments/453146681588973568/520045322492444687/ebe4390194306bcbe1cd89683542d1e5.jpg',
            description: '',
            info: {
                classe: 'Guerrier',
                race: 'Githet',
                historique: 'Soldat - Infanterie',
                alignement: 'Loyal Bon',
                niveau: '6',
                joueur: 'Dorian',
            },
            characteristics: {
                force: '18',
                dexterite: '12',
                constitution: '16',
                intelligence: '10',
                sagesse: '10',
                charisme: '20',
            },
            inspiration: '4',
            bonusMaster: '+3',
            saves: {
                force: {
                    value: '+7',
                    isMastered: true
                },
                dexterite: {
                    value: '+1',
                    isMastered: false
                },
                constitution: {
                    value: '+6',
                    isMastered: true
                },
                intelligence: {
                    value: '+0',
                    isMastered: false
                },
                sagesse: {
                    value: '+0',
                    isMastered: false
                },
                charisme: {
                    value: '+5',
                    isMastered: false
                },
            }
        },
        Aeterna: {
            firstname: 'Aeterna',
            lastname: 'Herumor',
            fullname: 'Aeterna Herumor',
            photo: 'https://i.pinimg.com/originals/dd/d3/6f/ddd36f11620a3727f8c7b5c662264456.jpg',
            description: '',
            info: {
                classe: 'Rogue',
                race: 'Elfe noir',
                historique: 'Hermit',
                alignement: 'Choatic Neutre',
                niveau: '3',
                joueur: 'Dorian',
            },
            characteristics: {
                force: '18',
                dexterite: '12',
                constitution: '16',
                intelligence: '10',
                sagesse: '10',
                charisme: '20',
            },
            inspiration: '4',
            bonusMaster: '3',
            saves: {
                force: {
                    value: '+7',
                    isMastered: true
                },
                dexterite: {
                    value: '+1',
                    isMastered: false
                },
                constitution: {
                    value: '+6',
                    isMastered: true
                },
                intelligence: {
                    value: '+0',
                    isMastered: false
                },
                sagesse: {
                    value: '+0',
                    isMastered: false
                },
                charisme: {
                    value: '+5',
                    isMastered: false
                },
            }
        },
    }
    return this.files;
}
