let filteredDogs = [];
let size = "all";
let social = "all";
let exercise = "all";
let fur = "all";
// Displayed if no dogs match the criteria
let displayTemplate = `<div id="koiraton" style='display: none;'>Ei koiria</div>`;

// Dogbreeds that can be searched for and displayed on the page
const dogBreeds = [
    { name: "Labrador", size: "large", social: "very", exercise: "very", fur: "easy", photo: "Dog_photos/Labrador_image.jpg", link: "https://en.wikipedia.org/wiki/Labrador_Retriever"}, 
    { name: "Beagle", size: "medium", social: "very", exercise: "medium", fur: "easy", photo: "Dog_photos/beagle_image.jpeg", link: "https://en.wikipedia.org/wiki/Beagle"},
    { name: "Chihuahua", size: "small", social: "medium", exercise: "little", fur: "easy", photo: "Dog_photos/chihuahua_image.jpeg", link: "https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)"},
    { name: "Golden Retriever", size: "large", social: "very", exercise: "very", fur: "medium", photo: "Dog_photos/golden_retriever_image.jpeg", link: "https://en.wikipedia.org/wiki/Golden_Retriever"},
    { name: "Bulldog", size: "medium", social: "medium", exercise: "little", fur: "easy", photo: "Dog_photos/bulldog_image.jpeg", link: "https://en.wikipedia.org/wiki/Bulldog"},
    { name: "Poodle", size: "medium", social: "very", exercise: "medium", fur: "medium", photo: "Dog_photos/poodle_image.jpeg", link: "https://en.wikipedia.org/wiki/Poodle"},
    { name: "German Shepherd", size: "large", social: "medium", exercise: "very", fur: "medium", photo: "Dog_photos/german_shepherd_image.jpeg", link: "https://en.wikipedia.org/wiki/German_Shepherd"},
    { name: "Dachshund", size: "small", social: "medium", exercise: "little", fur: "easy", photo: "Dog_photos/dachshund_image.jpeg", link: "https://en.wikipedia.org/wiki/Dachshund"},
    { name: "Shih Tzu", size: "small", social: "very", exercise: "little", fur: "medium", photo: "Dog_photos/shih_tzu_image.jpeg", link: "https://en.wikipedia.org/wiki/Shih_Tzu"},
    { name: "Boxer", size: "large", social: "very", exercise: "very", fur: "medium", photo: "Dog_photos/boxer_image.jpeg", link: "https://en.wikipedia.org/wiki/Boxer_(dog_breed)"},
    { name: "Corgi", size: "small", social: "very", exercise: "medium", fur: "medium", photo: "Dog_photos/corgi_image.jpeg", link: "https://en.wikipedia.org/wiki/Welsh_Corgi"},
    { name: "Rottweiler", size: "large", social: "medium", exercise: "very", fur: "medium" , photo: "Dog_photos/rottweiler_image.jpeg", link: "https://en.wikipedia.org/wiki/Rottweiler"},
    { name: "Pug", size: "small", social: "very", exercise: "little", fur: "easy", photo: "Dog_photos/pug_image.jpeg", link: "https://en.wikipedia.org/wiki/Pug"},
    { name: "Border Collie", size: "medium", social: "very", exercise: "very", fur: "medium", photo: "Dog_photos/border_collie_image.jpeg", link: "https://en.wikipedia.org/wiki/Border_Collie"},
    { name: "Siberian Husky", size: "large", social: "medium", exercise: "very", fur: "difficult" , photo: "Dog_photos/siberian_husky_image.jpeg", link: "https://en.wikipedia.org/wiki/Siberian_Husky"},
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
        displayTemplate += `<a href="${dog.link}" target="_blank"  class="img-anchor"><div class="image-container"><img class="dogElement" src="${dog.photo}"><p class="text-paragraph"><b>${dog.name}</b></p></div></a>`;
        document.getElementById('dog-display').innerHTML = displayTemplate;
    });
    displayTemplate = "";
}

function test() {
    console.log(criteria);
    filteredDogs = dogFilter(criteria);
    console.log(filteredDogs);
}

function searchFunction() {
    let input, filter, parentContainer, p, a, i, txtValue;
    let found = false;

    input = document.getElementById("search_bar");

    filter = input.value.toUpperCase();

    parentContainer = document.getElementById("dog-display");

    p = parentContainer.getElementsByTagName("a");
    // console.log(p);

    for (i = 0; i < p.length; i++) {
        a = p[i].getElementsByTagName("p")[0];
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