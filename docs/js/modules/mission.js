document.addEventListener('partials-loaded', () => {
    const mission = 'Teach, inspire, and support software development and startups on the ground in Africa.';
    const missionEl = document.getElementById('mission');
    if (missionEl) {
        missionEl.textContent = mission;
    }
});
export {};
