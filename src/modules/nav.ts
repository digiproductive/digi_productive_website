document.addEventListener('partials-loaded', () => {
  const toggle: HTMLElement | null = document.getElementById('menu-toggle')
  const links: HTMLElement | null = document.getElementById('menu-links')

  if (toggle && links) {
    toggle.addEventListener('click', (): void => {
      const isHidden: boolean = links.classList.contains('hidden')
      links.classList.toggle('hidden', !isHidden)
      links.classList.toggle('flex', isHidden)
    })
  } else {
    console.warn('⚠️ menu-toggle or menu-links not found in DOM')
  }
})
