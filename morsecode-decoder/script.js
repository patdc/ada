var alphabet = {  
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
 };

// déclaration de variable avec message que sera passé dans la fonction
var message;

// déclaration de variable avec la string decodée.
var messageConvert = [];

function decoderMessage(message) {

    // message.split("   ") - séparer chaque mot dans la string et les mettre ensemble dans un array
    // map((mot) - Utiliser un boucle map pour séparer chaque mot dans une array indépendente
    message.split("   ").map((mot) => {
    
        // mot.split("  ") va séparer chaque lettre du mot dans une array independante
        mot.split(" ").map((lettre) => {
        
        // messageConvert.push - Prendre la variable (array) messageConvert, qui est vide et rajouter quelque chose à la fin
        // la chose qui sera rajouté à la fin ça sera la lettre correspondante de l’alphabet. donc alphabet[letter], où [letter] correpond à l’index de la lettre dans le dictionnaire.
            messageConvert.push(alphabet[lettre]);
        });
        // rajouter un espace à la fin du mot, au cas où il y aura d’autres mots après
        messageConvert.push("");

    });
    var messageConvert1 = messageConvert.join("");

    return messageConvert1;

};

// decoderMessage(message)