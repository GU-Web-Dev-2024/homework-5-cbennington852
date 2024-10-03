//amount of artworks viewed
let numViewed = 0;



// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://media.npr.org/assets/img/2012/05/03/scream_vert-a59c4997eed62f01e7ce9f7471890ea40f1f4636.jpg?s=800&c=85&f=jpeg' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0Pzbr3GWoWr_PHcEcaquPLvRP_kRlWTwlg&s' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://www.italianrenaissance.org/wp-content/uploads/2012/08/Botticelli-Birth-of-Venus-detail.jpg' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://ychef.files.bbci.co.uk/1280x720/p070wbmx.jpg' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://www.gustav-klimt.com/assets/img/paintings/The-Kiss.jpg' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://images.squarespace-cdn.com/content/v1/5c7726d3815512843c24ce73/1553193716822-WWLW1L3SGDTT8LBUA57P/AG.jpg' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://miro.medium.com/v2/resize:fit:2000/1*sh5Q4isKVac2B6Rwg-2Oyg.jpeg' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://i.etsystatic.com/13408116/r/il/0dc16b/2867168762/il_570xN.2867168762_el69.jpg' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://i.etsystatic.com/28185652/r/il/1b3286/3329217138/il_570xN.3329217138_kcii.jpg' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxrtUPT6fwIOf4jPp1Jmv8Zrx2XNCRKkFAQ&s' }
];
// Add your JavaScript code here.

function  getRandomNum() {
    return Math.floor(Math.random() * newArtworks.length);
}

function initListeners() {
    document.getElementById("reset-button").addEventListener('click', () => {
        resetAllPanels();
    });
    document.getElementById("remove-art-button").addEventListener('click', () => {
       removeArtwork();
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

function removeArtwork() {
    const allPanels = document.querySelectorAll(".art-panel");

    allPanels.forEach(panel => {
        if (panel.style.backgroundColor === 'grey') {//clicked
            document.getElementById("art-grid").removeChild(panel);
        }
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