document.addEventListener('partials-loaded', () => {
  const typewriterText: string =
    'A grassroots initiative focused on developer mentorship and open-source development in Africa'

  const textEl: HTMLElement | null = document.getElementById('typewriter-text')
  let index: number = 0

  function typeNextChar(): void {
    if (!textEl) return

    if (index <= typewriterText.length) {
      textEl.textContent = typewriterText.slice(0, index++)
      setTimeout(typeNextChar, 20)
    }
  }

  setTimeout(typeNextChar, 500)
})
