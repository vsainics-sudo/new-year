function nextScreen(screenNumber) {
    // This line plays the music when they click "Yes" (Screen 2)
    if (screenNumber === 2) {
        document.getElementById('bg-music').play();
    }

    const containers = document.querySelectorAll('.container');
    containers.forEach(div => div.classList.add('hidden'));
    const nextDiv = document.getElementById('screen' + screenNumber);
    if (nextDiv) {
        nextDiv.classList.remove('hidden');
    }
}
