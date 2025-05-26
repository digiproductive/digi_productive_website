document.addEventListener('partials-loaded', () => {
    const mission = 'Our mission is to empower communities through accessible mentorship, open-source software development, and mission-aligned partnerships that scale innovation in fintech, digital services, and the broader digital economy across the African continent.';
    const missionEl = document.getElementById('mission');
    if (missionEl) {
        missionEl.textContent = mission;
    }
});
export {};
