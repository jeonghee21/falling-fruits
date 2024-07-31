const fruitContainer = document.getElementById('fruit-container');
const fruits = ['apple.png', 'banana.png', 'orange.png'];

const fruitHeight = 50;  // 과일 이미지의 높이

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createFruit() {
    const fruit = document.createElement('img');
    fruit.src = 'images/' + fruits[getRandomInt(0, fruits.length)];
    fruit.className = 'fruit';
    fruit.style.left = getRandomInt(0, window.innerWidth - 50) + 'px';
    fruit.style.top = '-50px';
    fruitContainer.appendChild(fruit);

    let fallSpeed = getRandomInt(2, 5);

    function fall() {
        let topPosition = parseInt(fruit.style.top);
        let leftPosition = parseInt(fruit.style.left);
        let bottomPosition = window.innerHeight - fruitHeight;  // 바닥 위치

        // 이미 쌓인 과일들 중에서 현재 과일이 쌓일 위치를 계산
        let maxTopPosition = bottomPosition;
        const fruitsOnScreen = document.querySelectorAll('.fruit');
        fruitsOnScreen.forEach(existingFruit => {
            const existingLeft = parseInt(existingFruit.style.left);
            const existingTop = parseInt(existingFruit.style.top);
            if (Math.abs(existingLeft - leftPosition) < fruitHeight) {
                maxTopPosition = Math.min(maxTopPosition, existingTop - fruitHeight);
            }
        });

        if (topPosition < maxTopPosition) {
            fruit.style.top = (topPosition + fallSpeed) + 'px';
            requestAnimationFrame(fall);
        } else {
            fruit.style.top = maxTopPosition + 'px';
        }
    }

    fall();
}

setInterval(createFruit, 1000); // 1초마다 새로운 과일이 생성됩니다.
