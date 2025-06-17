document.addEventListener('partials-loaded', () => {
  const mission: string =
    'Teach, inspire, and support software development and startups on the ground in Africa.'

  const missionEl: HTMLElement | null = document.getElementById('mission')

  if (missionEl) {
    missionEl.textContent = mission
  }
})
