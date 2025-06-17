document.addEventListener('partials-loaded', () => {
  type Update = {
    date: string
    content: string
    tags: string[]
  }

  const updates: Update[] = [
    {
      date: 'June 17, 2025',
      content: `🚀Just started a Substack newsletter about software development. <br> Join here: <a href="https://substack.com/@digiproductive" target="_blank" rel="noopener noreferrer" style="color:#60a5fa;">https://substack.com/@digiproductive</a>`,
      tags: ['#Substack', '#Flutter', '#Python', '#SoftwareDevelopment']
    }
  ]

  const feed: HTMLElement | null = document.getElementById('log-feed')
  if (!feed) return

  updates.forEach((entry: Update): void => {
    const post: HTMLDivElement = document.createElement('div')
    post.className = 'bg-gray-800 p-4 rounded-lg shadow border border-gray-700 mb-4'

    const tagsHTML: string = entry.tags.map((tag: string) => `<span>${tag}</span>`).join('')

    post.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-400 font-semibold">${entry.date}</span>
          <span class="text-xs text-gray-500">#DevLog</span>
        </div>
        <p class="text-sm text-gray-200 leading-relaxed mb-2">
          ${entry.content}
        </p>
        <div class="text-xs text-blue-400 flex flex-wrap gap-2">
          ${tagsHTML}
        </div>
      `

    feed.appendChild(post)
  })
})
