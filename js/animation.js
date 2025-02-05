// Logo animation
gsap.from(".logo", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

// Data elements for animation
const dataElements = [
    '📊', '📈', '📉', // Charts
    '∑', 'μ', 'σ', 'π', // Math symbols
    '0️⃣', '1️⃣', // Numbers
    '💹', '📊', // Statistics
    '🔍', '💡', // Analysis symbols
    '📱', '💻', // Tech symbols
    '📗', '📘', // Books
    '%', '$', // Symbols
];

// Colors for elements
const elementColors = [
    'rgba(255, 255, 255, 0.6)',
    'rgba(80, 200, 120, 0.6)',
    'rgba(44, 130, 212, 0.6)'
];

function createFloatingElement() {
    const element = document.createElement('div');
    element.classList.add('floating-element');
    
    // Random element from array
    const dataSymbol = dataElements[Math.floor(Math.random() * dataElements.length)];
    element.textContent = dataSymbol;
    
    // Random color
    const color = elementColors[Math.floor(Math.random() * elementColors.length)];
    element.style.color = color;
    
    // Randomize starting position
    element.style.left = `${Math.random() * 100}vw`;
    
    // Randomize animation properties
    const animationDuration = 6 + Math.random() * 5;
    const animationDelay = Math.random() * 3;
    
    element.style.animationDuration = `${animationDuration}s`;
    element.style.animationDelay = `${animationDelay}s`;
    
    // Add random rotation and scale
    const scale = 0.8 + Math.random() * 0.4;
    element.style.transform = `rotate(${Math.random() * 360}deg) scale(${scale})`;
    
    return element;
}

function createDataAnimation() {
    const animationContainer = document.querySelector('.animation-container');
    if (!animationContainer) return;

    // Clear existing elements
    animationContainer.innerHTML = '';

    // Create new batch of elements
    const elementCount = 20;
    for (let i = 0; i < elementCount; i++) {
        const element = createFloatingElement();
        animationContainer.appendChild(element);
    }

    // Remove elements after animation
    setTimeout(() => {
        const elements = animationContainer.getElementsByClassName('floating-element');
        while (elements.length > 0) {
            elements[0].remove();
        }
    }, 10000);
}

// Initialize animation
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation
    createDataAnimation();
    
    // Recreate elements periodically
    setInterval(createDataAnimation, 10000);

    // Add hero section parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});
