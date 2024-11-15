// Store progress in localStorage to persist between page loads
let progress = JSON.parse(localStorage.getItem('progress')) || Array(11).fill(false);
const fullMessage = "Hello World".split('');
updateDisplay();

// Event listener for starting the challenge
document.getElementById('challengeButton').addEventListener('click', () => {
    console.log('Start Challenge button clicked!'); // Debug line to confirm click event
    document.getElementById('challengeBox').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    updateDisplay(); // Ensure collected characters are shown on main page load
});

// Hint button event
document.getElementById('hintButton').addEventListener('click', () => {
    document.getElementById('hintResult').innerText = 'Hint: Shift each letter back by one place in the alphabet.';
});

// Reset button event
document.getElementById('resetButton').addEventListener('click', () => {
    progress = Array(11).fill(false);
    localStorage.setItem('progress', JSON.stringify(progress));
    updateDisplay();
    document.getElementById('hintResult').innerText = ''; // Clear hint text
    document.getElementById('result').innerText = 'Progress reset.';
});

function updateDisplay() {
    const collectedDisplay = document.getElementById('collectedDisplay');
    collectedDisplay.innerHTML = ''; // Clear existing display

    // Display collected characters
    progress.forEach((p, i) => {
        const charBox = document.createElement('div');
        charBox.classList.add('char-box');
        charBox.innerText = p ? fullMessage[i] : '_'; // Show character if revealed, otherwise empty
        collectedDisplay.appendChild(charBox);
    });

    // Check if all characters are collected
    if (progress.every(p => p)) {
        showCoinPageButton();
    }
}

function showCoinPageButton() {
    // Check if the button already exists to prevent duplication
    if (!document.getElementById('coinPageButton')) {
        const button = document.createElement('button');
        button.id = 'coinPageButton';
        button.classList.add('cyber-button');
        button.innerText = 'Go to Coin Flip';
        button.onclick = () => {
            window.location.href = 'coinflip.html'; // Redirect to the coin flip page
        };
        document.getElementById('mainPage').appendChild(button);
    }
}

// Simulate opening a question (for linking, replace alert with navigation logic)
function openQuestion(number) {
    alert(`Question ${number} clicked! Implement navigation logic here.`);
}
