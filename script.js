const fruitContainer = document.getElementById('fruit-container');
const fruits = ['apple.png', 'banana.png', 'orange.png', 'tomato.png'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function createFruit() {
    const fruit = document.createElement('img');
    frunit.src = 'images/' + fruits[getRandomInt(0, fruits.length)];
    fruit.className = 'fruit';
    fruit.style.left = getRandomInt(0, window.innerWidth - 50) + 'px';
    fruit.style.top = '-50px';
    fruitContainer.appendChild(fruit);

    let fallSpeed = getRandomInt(2, 5);

    function fall() {
        let topPosition = parseInt(fruit.style.top);
        if (topPosition < window.innerHeight) {
            fruit.style.top = (topPosition + fallSpeed) + 'px';
            requestAnimationFrame(fall);
        } else {
            fruit.remove();
        }
    }

    fall();
}

setInterval(createFruit, 1000);