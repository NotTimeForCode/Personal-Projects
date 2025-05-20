let filteredDogs = [];
let size = "all";
let social = "all";
let exercise = "all";
let fur = "all";
// Displayed if no dogs match the criteria
let displayTemplate = `<div id="koiraton" style='display: none;'>Ei koiria</div>`;

// Dogbreeds that can be searched for and displayed on the page
const dogBreeds = [
    { name: "Labrador", size: "large", social: "very", exercise: "very", fur: "easy", photo: "Dog_photos/Labrador_image.jpg", link: "https://fi.wikipedia.org/wiki/Labradorinnoutaja"}, 
    { name: "Beagle", size: "medium", social: "very", exercise: "medium", fur: "easy", photo: "", link: ""},
    { name: "Chihuahua", size: "small", social: "medium", exercise: "little", fur: "easy", photo: "", link: ""},
    { name: "Golden Retriever", size: "large", social: "very", exercise: "very", fur: "medium", photo: "", link: ""},
    { name: "Bulldog", size: "medium", social: "medium", exercise: "little", fur: "easy", photo: "", link: ""},
    { name: "Poodle", size: "medium", social: "very", exercise: "medium", fur: "medium", photo: "", link: ""},
    { name: "German Shepherd", size: "large", social: "medium", exercise: "very", fur: "medium", photo: "", link: ""},
    { name: "Dachshund", size: "small", social: "medium", exercise: "little", fur: "easy", photo: "", link: ""},
    { name: "Shih Tzu", size: "small", social: "very", exercise: "little", fur: "medium", photo: "", link: ""},
    { name: "Boxer", size: "large", social: "very", exercise: "very", fur: "medium", photo: "", link: ""},
    { name: "Corgi", size: "small", social: "very", exercise: "medium", fur: "medium", photo: "", link: ""},
    { name: "Rottweiler", size: "large", social: "medium", exercise: "very", fur: "medium" , photo: "", link: ""},
    { name: "Pug", size: "small", social: "very", exercise: "little", fur: "easy", photo: "", link: ""},
    { name: "Border Collie", size: "medium", social: "very", exercise: "very", fur: "medium", photo: "", link: ""},
    { name: "Siberian Husky", size: "large", social: "medium", exercise: "very", fur: "difficult" , photo: "", link: ""},
];

// Checks if the size option is modified and if so updates the page
document.getElementById("size").addEventListener('change', function () {
    criteria.size = document.getElementById('size').value;
    grabNewCriteria();
});

// Checks if the social option is modified and if so updates the page
document.getElementById("social").addEventListener('change', function () {
    criteria.social = document.getElementById('social').value;
    grabNewCriteria();
});
// Checks if the exercise option is modified and if so updates the page
document.getElementById("exercise").addEventListener('change', function () {
    criteria.exercise = document.getElementById('exercise').value;
    grabNewCriteria();
});

// Checks if the fur option is modified and if so updates the page
document.getElementById("fur").addEventListener('change', function () {
    criteria.fur = document.getElementById('fur').value;
    grabNewCriteria();
});

// Gets checked against dogBreeds array and everything matching is displayed on the screen
let criteria = {
    size: size,
    social: social,
    exercise: exercise,
    fur: fur
};

// Function to filter the dogs
function dogFilter(criteria) {
    return dogBreeds.filter(breed =>
    (criteria.size === 'all' || breed.size === criteria.size) &&
    (criteria.social === 'all' || breed.social === criteria.social) &&
    (criteria.exercise === 'all' || breed.exercise === criteria.exercise) &&
    (criteria.fur === 'all' || breed.fur === criteria.fur)
    );
}

// Updates criteria
function grabNewCriteria() {
    filteredDogs = dogFilter(criteria);
    console.log(filteredDogs);
    document.getElementById('dog-display').innerHTML = filteredDogs;
    writeData(filteredDogs);
}

grabNewCriteria();

function writeData(filteredDogsArray) {
    filteredDogsArray.forEach(dog => {
        if (!dog.photo) {
            dog.photo = "Dog_photos/beagle_image.jpeg";
        }
        if (!dog.link) {
            dog.link = "https://fi.wikipedia.org/wiki/Labradorinnoutaja";
        }
        displayTemplate += `<a href="${dog.link}" target="_blank"  class="img-anchor"><div class="image-container"><img class="dogElement" src="${dog.photo}"><p class="text-paragraph">${dog.name}</p></div></a>`;
        document.getElementById('dog-display').innerHTML = displayTemplate;
    });
    displayTemplate = "";
    console.log("did this run?");
}

function test() {
    console.log(criteria);
    filteredDogs = dogFilter(criteria);
    console.log(filteredDogs);
}

function searchFunction() {
    let input, filter, parentContainer, p, a, i, txtValue;
    let found = false;

    input = document.getElementById("search-bar");

    filter = input.value.toUpperCase();

    parentContainer = document.getElementById("dog-display");

    p = parentContainer.getElementsByTagName("p");

    for (i = 0; i < p.length; i++) {
        a = p[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
            found = true;
        } else {
            p[i].style.display = "none";
        }
    }

    if (!found) {
        let koiraton = document.getElementById('koiraton');
        if (koiraton) {
            koiraton.style.display = "block";
        }
    } else {
        let koiraton = document.getElementById('koiraton');
        if (koiraton) {
            koiraton.style.display = "none";
        }
    }
}