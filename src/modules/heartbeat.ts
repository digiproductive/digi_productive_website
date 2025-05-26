document.addEventListener('DOMContentLoaded', () => {
  const heart: HTMLElement | null = document.getElementById('heart-beat')
  if (!heart) return

  let scaleUp: boolean = true

  setInterval((): void => {
    heart.style.transform = scaleUp ? 'scale(1.5)' : 'scale(1)'
    heart.style.transition = 'transform 0.8s ease-in-out'
    scaleUp = !scaleUp
  }, 1200)
})
