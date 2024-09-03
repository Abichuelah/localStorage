document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    localStorage.setItem('storedData', inputText);
    window.location.href = 'data.html';
});