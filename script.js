//amount of artworks viewed
let numViewed = 0;

//list of which are cliked

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
    return Math.floor(Math.random() * newArtworks.length);
}

function initListeners() {
    document.getElementById("reset-button").addEventListener('click', () => {
        resetAllPanels();
    });
}



//fucntion to create a new artwork??!?!
function createDiv() {
    const newDiv = document.createElement("div");
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

    //adds veiw tracker
    newDiv.addEventListener("click", () => {

        if (newDiv.style.backgroundColor !== 'grey') {
            newDiv.style.backgroundColor = "grey";
            numViewed++;
        }
        else
        {
            newDiv.style.backgroundColor = "#eee";
            numViewed--;
        }
        document.getElementById("counter").innerText = "Artworks Viewed: " + numViewed;
    });

    //add to document model
    document.getElementById("art-grid").appendChild(newDiv);
}

function resetAllPanels() {
    const allPanels = document.querySelectorAll(".art-panel");

    allPanels.forEach(panel => {
        panel.style.backgroundColor = "#eee"; // Reset to default background
        panel.isViewed = false; // Reset viewed status
    });

    numViewed = 0; // Reset the view counter
    document.getElementById("counter").innerText = "Artworks Viewed: " + numViewed;
}

//populate with random
document.onload = createDiv();
document.onload = createDiv();
document.onload = createDiv();
document.onload = initListeners ();


document.getElementById("add-art-button")
    .addEventListener("click", createDiv)


// Later, move this to an external JavaScript file for better organization.