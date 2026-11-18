
document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#f4f4f9', '#e3f2fd', '#e8f5e9', '#fff3e0', '#fce4ec'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    const hours = new Date().getHours();
    let greeting = "Welcome";

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    
    console.log(`${greeting}! Portfolio loaded successfully.`);
});


const subjectItems = document.querySelectorAll('.subjects-list li');
subjectItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.textContent}. Great subject for this semester!`);
    });
});