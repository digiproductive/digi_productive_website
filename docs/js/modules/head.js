fetch('partials/head.html')
    .then((res) => res.text())
    .then((html) => {
    document.head.insertAdjacentHTML('beforeend', html);
    document.dispatchEvent(new Event('head-loaded'));
})
    .catch((err) => {
    console.error('❌ Failed to load head.html', err);
});
export {};
