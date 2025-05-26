document.addEventListener('partials-loaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const links = document.getElementById('menu-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const isHidden = links.classList.contains('hidden');
            links.classList.toggle('hidden', !isHidden);
            links.classList.toggle('flex', isHidden);
        });
    }
    else {
        console.warn('⚠️ menu-toggle or menu-links not found in DOM');
    }
});
export {};
