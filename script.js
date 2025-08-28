document.addEventListener('DOMContentLoaded', function() {
    const players = document.querySelectorAll('.player');

    players.forEach(player => {
        const img = player.querySelector('img');
        const nameDiv = player.querySelector('.p_name');
        const textDiv = player.querySelector('.p_text');

        player.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.3s ease';
            nameDiv.style.opacity = '1';
            textDiv.style.opacity = '1';
        });

        player.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            nameDiv.style.opacity = '0';
            textDiv.style.opacity = '0';
        });
    });
});