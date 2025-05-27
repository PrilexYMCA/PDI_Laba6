document.getElementById('dateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('futureDate').value;
    const futureTime = new Date(input);
    const now = new Date();

    if (futureTime <= now) {
        document.getElementById('result').textContent = 'Введіть дату у майбутньому!';
        return;
    }

    const diffMs = futureTime - now;
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);

    document.getElementById('result').innerHTML = `
        <strong>До обраної дати залишилось:</strong><br>
        🕒 ${seconds.toLocaleString()} секунд<br>
        🕑 ${minutes.toLocaleString()} хвилин<br>
        ⏰ ${hours.toLocaleString()} годин
    `;
});
