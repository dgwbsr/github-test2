// // Example: Change text on button click
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     const message = document.createElement('p');
//     message.textContent = 'Hello!';
//     document.body.appendChild(message);
// });

const toggleButton = document.querySelector('#toggleButton');
const sectionToToggle = document.querySelector('#sectionToToggle');

toggleButton.addEventListener('click', function() {
    sectionToToggle.classList.toggle('hidden');
});

const images = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png'
];
let currentIndex = 0;
const imageElement = document.querySelector('#sliderImage');

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    imageElement.src = images[currentIndex];
}

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

prevButton.addEventListener('click', function() {
    changeImage(-1);
});

nextButton.addEventListener('click', function() {
    changeImage(1);
});