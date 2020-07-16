console.log("dogs of the world, unite")

let fichiers =  [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
]

let imgs = document.getElementsByTagName('img');

for (elt of imgs) {
    let randomPhotoNumber = Math.floor(Math.random() * fichiers.length);
    let fichier = 'puppies/' + fichiers[randomPhotoNumber];
    let url = chrome.extension.getURL(fichier)
    elt.src = url;
    elt.style['object-fit'] = 'contain';
    // elt.style['width'] = elt.width;
    // elt.style['height'] = elt.height;
}

