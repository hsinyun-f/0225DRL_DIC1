function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Formatting time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Formatting date: Day, Month Date, Year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Interactive tilt effect for the card
const card = document.getElementById('main-card');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

document.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
