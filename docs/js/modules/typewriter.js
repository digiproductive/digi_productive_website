document.addEventListener('partials-loaded', () => {
    const typewriterText = 'A grassroots initiative focused on developer mentorship and open-source development in Africa';
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
