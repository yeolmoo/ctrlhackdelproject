// Store progress in localStorage to persist between page loads
let progress = JSON.parse(localStorage.getItem('progress')) || Array(11).fill(false);
const fullMessage = "Hello World".split('');
updateDisplay();

// Event listener for starting the challenge
document.getElementById('challengeButton').addEventListener('click', () => {
    document.getElementById('challengeBox').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
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
    const revealed = progress.map((p, i) => (p ? fullMessage[i] : '_')).join(' ');
    document.getElementById('revealed').innerText = revealed;
}

// Simulate opening a question (for linking, replace alert with navigation logic)
function openQuestion(number) {
    alert(`Question ${number} clicked! Implement navigation logic here.`);
}
