//amount of artworks viewed
let numViewed = 0;
// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.

function  getRandomNum() {
    return Math.floor(Math.random() * newArtworks.length) + 1;
}

//fucntion to create a new artwork??!?!
function createDiv() {
    const newDiv = document.createElement("div");
    let isViewed = false;
    newDiv.className = "art-panel";

    //select rand artwork
    let artIndex = getRandomNum();

    //make img and txt
    const artImg = document.createElement("img");
    const artText = document.createElement("p");

    //apply random
    artImg.src = newArtworks[artIndex].img;
    artImg.alt = newArtworks[artIndex].img;
    artText.innerText = newArtworks[artIndex].title + " by " + newArtworks[artIndex].artist;

    //make child
    newDiv.appendChild(artImg);
    newDiv.appendChild(artText);

    //add event
    newDiv.addEventListener("mouseover", () => {
        //when mouse enter
    });

    newDiv.addEventListener("mouseout", () => {
        //when mouse exit
    });

    newDiv.addEventListener("click", () => {
        numViewed = numViewed + 1;
        isViewed = true;
        newDiv.style.backgroundColor = "grey";
    });

    //add to document model
    document.getElementById("art-grid").appendChild(newDiv);
}

//populate with random
document.onload = createDiv();
document.onload = createDiv();
document.onload = createDiv();


document.getElementById("add-art-button")
    .addEventListener("click", createDiv)


// Later, move this to an external JavaScript file for better organization.