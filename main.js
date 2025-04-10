document.getElementById('roll-btn').addEventListener('click', function() {
    const dieResult = Math.floor(Math.random() * 20) + 1; // Generates a number between 1 and 6
    document.getElementById('die-result').textContent = `You rolled a ${dieResult}!`;
});