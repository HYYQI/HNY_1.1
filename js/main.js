document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown-time');
    const audio = document.getElementById('audio');

    function updateCountdown() {
        const newYear = new Date('January 1, 2024 00:00:00');
        const now = new Date();
        const diff = newYear - now;

        if (diff < 0) {
            countdownElement.innerHTML = '新年快乐！';
            audio.pause();
        } else {
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);

            countdownElement.innerHTML = `${hours}时 ${minutes}分 ${seconds}秒`;
        }
    }

    setInterval(updateCountdown, 1000);

    function createMarqueeMessages() {
        const messages = [
            '新年快乐！',
            '万事如意！',
            '恭喜发财！',
            '身体健康！',
            '笑口常开！'
        ];

        const marquee = document.querySelector('.marquee');
        messages.forEach(message => {
            const div = document.createElement('div');
            div.textContent = message;
            marquee.appendChild(div);
        });
    }

    createMarqueeMessages();
});
