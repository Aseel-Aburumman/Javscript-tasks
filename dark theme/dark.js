function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        sessionStorage.setItem('mode', 'dark');
    } else {
        sessionStorage.setItem('mode', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = sessionStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    const toggleButton = document.getElementById('toggleMode');
    toggleButton.addEventListener('click', toggleMode);
});
