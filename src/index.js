//console.log('%c HI', 'color: firebrick')

fetchDogs();
fetchBreeds();
//handleDropdown();

//fetches the images from given url and adds it to the dom
function fetchDogs () {
    const dogGallery = document.getElementById("dog-image-container");

    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then (response => response.json())
    .then (dogImage => {
        for (const element of dogImage.message) {
            const img = document.createElement('img');
            img.src = element;
            dogGallery.appendChild(img);
        }
    });
}

//fetches list of breeds and adds it to the unordered list
function fetchBreeds () {
    const breedList = document.querySelector("#dog-breeds");

    fetch ('https://dog.ceo/api/breeds/list/all') 
    .then (response => response.json()) 
    .then (dogBreeds => {
        for (const element in dogBreeds.message) {
            const breed = document.createElement('li');
            breed.textContent = element;

            //add an event listener to each breed for when it is clicked
            breed.addEventListener('click', handleBreedColor);
            breedList.appendChild(breed);
        }
    });
}

//handles click event and changes the font color of the breed name
function handleBreedColor(event) {
    event.target.style.color = 'darkseagreen';
}

function handleDropdown (x) {
    const breedList = document.querySelectorAll('ul li'); 
    
    for (const breed of breedList) {
        if (x.value === breed.textContent[0]) {
            breed.style.display = '';
        } else {
            breed.style.display = 'none';
        }
    }
}