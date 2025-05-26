document.addEventListener('DOMContentLoaded', () => {
    const includes = document.querySelectorAll('[data-include]');
    const loadPromises = [];
    includes.forEach((el) => {
        const file = el.getAttribute('data-include');
        if (!file)
            return;
        const load = fetch(file)
            .then((res) => res.text())
            .then((html) => {
            el.innerHTML = html;
        })
            .catch((err) => {
            console.error(`❌ Failed to load ${file}`, err);
        });
        loadPromises.push(load);
    });
    Promise.all(loadPromises).then(() => {
        document.dispatchEvent(new Event('partials-loaded'));
    });
});
export {};
