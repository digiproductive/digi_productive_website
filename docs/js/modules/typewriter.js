document.addEventListener('partials-loaded', () => {
    const typewriterText = 'Contributing to software and app development in Africa through free knowledge sharing, skill building, collaboration, and startup initiatives.';
    const textEl = document.getElementById('typewriter-text');
    let index = 0;
    function typeNextChar() {
        if (!textEl)
            return;
        if (index <= typewriterText.length) {
            textEl.textContent = typewriterText.slice(0, index++);
            setTimeout(typeNextChar, 20);
        }
    }
    setTimeout(typeNextChar, 500);
});
export {};
