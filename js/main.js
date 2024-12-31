document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown-time');
    const audio = document.getElementById('audio');

    function updateCountdown() {
        const newYear = new Date('January 1, 2024 00:00:00');
        const now = new Date();
        const diff = newYear - now;

        if (diff < 0) {
            countdownElement.innerHTML = '新年快乐！';
            audio.play();
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
        }
    }

    setInterval(updateCountdown, 1000);

    function createMarqueeMessages() {
        const messages = [
            '新年快乐，万事如意！',
            '恭喜发财，红包拿来！',
            '身体健康，笑口常开！',
            '心想事成，步步高升！',
            '学业进步，事业有成！',
            '家庭和睦，幸福美满！',
            '财源广进，生意兴隆！',
            '好运连连，喜事多多！',
            '平安喜乐，岁岁平安！',
            '福星高照，鸿运当头！',
            '友情长久，爱情甜蜜！'
        ];

        const marquee = document.querySelector('.marquee');
        messages.forEach(message => {
            const div = document.createElement('div');
            div.textContent = message;
            div.style.animationDuration = `${5 + Math.random() * 3}s`; // 随机设置10-20秒动画时间
            div.style.animationDelay = `-${Math.random() * 10}s`; // 随机设置负延迟时间
            marquee.appendChild(div);
        });
    }

    createMarqueeMessages();
});
