//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const characterImages = {
    "Harry-Potter": "https://example.com/harry-potter.jpg",
    "Hermione-Granger": "https://example.com/hermione-granger.jpg",
    "Ron-Weasley": "https://example.com/ron-weasley.jpg",
    "Severus-Snape": "https://example.com/severus-snape.jpg",
    "Draco-Malfoy": "https://example.com/draco-malfoy.jpg",
    "Cedric-Diggory": "https://example.com/cedric-diggory.jpg",
    "Lord-Voldemort": "https://example.com/lord-voldemort.jpg",
    "Bellatrix-Lestrange": "https://example.com/bellatrix-lestrange.jpg"
};
for (const id in characterImages) {
    const imgElement = document.getElementById(id);
    if (imgElement) {
        imgElement.src = characterImages[id]; 
    }
}
///////////////////////////////////???????