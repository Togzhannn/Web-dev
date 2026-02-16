
const colorButtons = document.querySelectorAll('.color-btn');
const randomBtn = document.getElementById('random-btn');
const resetBtn = document.getElementById('reset-btn');
const colorCodeSpan = document.getElementById('color-code');
const body = document.body;


function changeBackground(color) {
    body.style.backgroundColor = color;
    colorCodeSpan.textContent = color.toUpperCase();
}


function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor;
}


colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        changeBackground(color);
    });
});

// 5. Random button listener
randomBtn.addEventListener('click', () => {
    const newColor = generateRandomColor();
    changeBackground(newColor);
});

// 6. Reset button listener
resetBtn.addEventListener('click', () => {
    changeBackground('#FFFFFF');
});