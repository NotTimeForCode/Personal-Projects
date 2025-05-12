let filteredDogs = [];
let size = "all";
let social = "all";
let exercise = "all";
let fur = "all";
let displayTemplate = `<div id="koiraton" style='display: none;'>Ei koiria</div>`;

const dogBreeds = [
    { name: "Labrador", size: "large", social: "very", exercise: "very", fur: "easy" },
    { name: "Beagle", size: "medium", social: "very", exercise: "medium", fur: "easy" },
    { name: "Chihuahua", size: "small", social: "medium", exercise: "little", fur: "easy" },
    { name: "Golden Retriever", size: "large", social: "very", exercise: "very", fur: "medium" },
    { name: "Bulldog", size: "medium", social: "medium", exercise: "little", fur: "easy" },
    { name: "Poodle", size: "medium", social: "very", exercise: "medium", fur: "medium" },
    { name: "German Shepherd", size: "large", social: "medium", exercise: "very", fur: "medium" },
    { name: "Dachshund", size: "small", social: "medium", exercise: "little", fur: "easy" },
    { name: "Shih Tzu", size: "small", social: "very", exercise: "little", fur: "medium" },
    { name: "Boxer", size: "large", social: "very", exercise: "very", fur: "medium" },
    { name: "Corgi", size: "small", social: "very", exercise: "medium", fur: "medium" },
    { name: "Rottweiler", size: "large", social: "medium", exercise: "very", fur: "medium" },
    { name: "Pug", size: "small", social: "very", exercise: "little", fur: "easy" },
    { name: "Border Collie", size: "medium", social: "very", exercise: "very", fur: "medium" },
    { name: "Siberian Husky", size: "large", social: "medium", exercise: "very", fur: "difficult" },
];

document.getElementById("size").addEventListener('change', function () {
    criteria.size = document.getElementById('size').value;
    grabNewCriteria();
});

document.getElementById("social").addEventListener('change', function () {
    criteria.social = document.getElementById('social').value;
    grabNewCriteria();
});

document.getElementById("exercise").addEventListener('change', function () {
    criteria.exercise = document.getElementById('exercise').value;
    grabNewCriteria();
});

document.getElementById("fur").addEventListener('change', function () {
    criteria.fur = document.getElementById('fur').value;
    grabNewCriteria();
});

let criteria = {
    size: size,
    social: social,
    exercise: exercise,
    fur: fur
};

function dogFilter(criteria) {
    return dogBreeds.filter(breed =>
    (criteria.size === 'all' || breed.size === criteria.size) &&
    (criteria.social === 'all' || breed.social === criteria.social) &&
    (criteria.exercise === 'all' || breed.exercise === criteria.exercise) &&
    (criteria.fur === 'all' || breed.fur === criteria.fur)
    );
}

function grabNewCriteria() {
    filteredDogs = dogFilter(criteria);
    console.log(filteredDogs);
    document.getElementById('dog-display').innerHTML = filteredDogs;
    writeData(filteredDogs);
}

grabNewCriteria();

function writeData(filteredDogsArray) {
    filteredDogsArray.forEach(dog => {
        displayTemplate += `<div class="dogElement"><p><a>${dog.name}</a></p></div>`;
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