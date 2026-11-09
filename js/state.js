/* Central app state */
const State = {
  tasks: [],
  filter: 'all',
  theme: 'light',

  load() {
    this.tasks = Storage.get(CONFIG.STORAGE_KEY, []);
    this.theme = Storage.get(CONFIG.THEME_KEY, 'light');
  },

  save() {
    Storage.set(CONFIG.STORAGE_KEY, this.tasks);
  },

  saveTheme() {
    Storage.set(CONFIG.THEME_KEY, this.theme);
  },

  getVisibleTasks() {
    if (this.filter === 'active') return this.tasks.filter((t) => !t.completed);
    if (this.filter === 'completed') return this.tasks.filter((t) => t.completed);
    return this.tasks;
  },

  countActive() {
    return this.tasks.filter((t) => !t.completed).length;
  }
};