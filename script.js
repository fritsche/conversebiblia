const dict = {
    "Gênesis": 50,
    "Êxodo": 40,
    "Levítico": 27,
    "Números": 36,
    "Deuteronômio": 34,
    "Josué": 24,
    "Juízes": 21,
    "Rute": 4,
    "1 Samuel": 31,
    "2 Samuel": 24,
    "1 Reis": 22,
    "2 Reis": 25,
    "1 Crônicas": 29,
    "2 Crônicas": 36,
    "Esdras": 10,
    "Neemias": 13,
    "Ester": 10,
    "Jó": 42,
    "Salmos": 150,
    "Provérbios": 31,
    "Eclesiastes": 12,
    "Cânticos": 8,
    "Isaías": 66,
    "Jeremias": 52,
    "Lamentações de Jeremias": 5,
    "Ezequiel": 48,
    "Daniel": 12,
    "Oseias": 14,
    "Joel": 3,
    "Amós": 9,
    "Obadias": 1,
    "Jonas": 4,
    "Miqueias": 7,
    "Naum": 3,
    "Habacuque": 3,
    "Sofonias": 3,
    "Ageu": 2,
    "Zacarias": 14,
    "Malaquias": 4,
    "Mateus": 28,
    "Marcos": 16,
    "Lucas": 24,
    "João": 21,
    "Atos dos Apóstolos": 26,
    "Romanos": 16,
    "1 Coríntios": 16,
    "2 Coríntios": 13,
    "Gálatas": 6,
    "Efésios": 6,
    "Filipenses": 4,
    "Colossenses": 4,
    "1 Tessalonicenses": 5,
    "2 Tessalonicenses": 3,
    "1 Timóteo": 6,
    "2 Timóteo": 4,
    "Tito": 3,
    "Filemom": 1,
    "Hebreus": 13,
    "Tiago": 5,
    "1 Pedro": 5,
    "2 Pedro": 3,
    "1 João": 5,
    "2 João": 1,
    "3 João": 1,
    "Judas": 1,
    "Apocalipse": 22,
};
const min = 1;
const max = 1187;

function randomChapter() {
    let random = Math.floor(Math.random() * (max - min)) + min;
    for (var key in dict) {
        var value = dict[key];
        if (value >= random) {
            chapter = `${key} ${random}`;
            localStorage.setItem('bible-chapter', chapter);
            element.innerText = chapter;
            break;
        }
        random -= value;
    }
}

document.getElementById('chapter-button').addEventListener('click', randomChapter);
const element = document.getElementById('bible-chapter');
let chapter = localStorage.getItem('bible-chapter');
if (chapter) {
    element.innerText = chapter;
} else {
    randomChapter();
}
