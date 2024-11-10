function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const hours = now.getHours();

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;

    // Greeting based on time of day
    let greeting = '';
    if (hours < 12) greeting = 'Good morning';
    else if (hours < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';
    document.getElementById('greeting').textContent = greeting;

    // Week number
    const weekNumber = Math.ceil((now - new Date(now.getFullYear(), 0, 1)) / 604800000);
    document.getElementById('week').textContent = weekNumber;

    // Day of year
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    document.getElementById('day-of-year').textContent = dayOfYear;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});