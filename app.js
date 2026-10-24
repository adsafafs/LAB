document.addEventListener('DOMContentLoaded', () => {
    // Динамические часы
    setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString();
    }, 1000);

    // Динамический счетчик кликов
    let count = 0;
    const counterBtn = document.getElementById('clickBtn');
    counterBtn.addEventListener('click', () => {
        count++;
        document.getElementById('counterValue').innerText = count;
    });

    // Асинхронный запрос данных (REST API)
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;
        })
        .catch(() => {
            document.getElementById('quote').innerText = 'Цитата дня загружена локально.';
        });
});
