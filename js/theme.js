/* Theme toggle */
const Theme = {
  toggleBtn: null,

  init() {
    this.toggleBtn = Utils.qs('#theme-toggle');
    this.apply(State.theme);
    this.toggleBtn.addEventListener('click', () => this.toggle());
  },

  apply(theme) {
    State.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    State.saveTheme();
  },

  toggle() {
    this.apply(State.theme === 'dark' ? 'light' : 'dark');
  }
};