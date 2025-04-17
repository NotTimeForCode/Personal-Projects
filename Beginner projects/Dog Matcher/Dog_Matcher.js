let filteredDogs = [];
let size = "all";
let social = "all";
let exercise = "all";
let fur = "all";
let displayTemplate = "";

const dogBreeds = [
    { name: "Labrador", size: "large", social: "very", exercise: "very", fur: "easy" },
    { name: "Beagle", size: "medium", social: "very", exercise: "medium", fur: "easy" },
    { name: "Chihuahua", size: "small", social: "medium", exercise: "little", fur: "easy" },
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

function writeData(filteredDogsArray) {
    filteredDogsArray.forEach(dog => {
        displayTemplate += `<p>${dog.name}</p>`;
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