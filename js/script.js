document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sound-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = button.getAttribute('data-sound');
            const audio = new Audio(sound);
            audio.play();
        });
    });
});
