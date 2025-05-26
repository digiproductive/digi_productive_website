document.addEventListener('partials-loaded', () => {
    const updates = [
        {
            date: 'May 20, 2025',
            content: `Finalized the job submission form in Flutter and added location-based filtering so users can search jobs nearby. Big step forward! 🚀`,
            tags: ['#Flutter', '#OpenSource', '#AfricaBuilds']
        },
        {
            date: 'May 19, 2025',
            content: `Set up the initial Supabase backend schema and pushed the first project repo live. Took some time to journal ideas around worker rating systems — excited for what’s coming. 💡`,
            tags: ['#Supabase', '#DevLog', '#CommunityTools']
        }
    ];
    const feed = document.getElementById('log-feed');
    if (!feed)
        return;
    updates.forEach((entry) => {
        const post = document.createElement('div');
        post.className = 'bg-gray-800 p-4 rounded-lg shadow border border-gray-700 mb-4';
        const tagsHTML = entry.tags.map((tag) => `<span>${tag}</span>`).join('');
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
      `;
        feed.appendChild(post);
    });
});
export {};
