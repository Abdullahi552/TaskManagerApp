/* Keyboard shortcuts */
const Keyboard = {
  init() {
    document.addEventListener('keydown', (e) => {
      // Focus input with "/"
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        Utils.qs('#task-input').focus();
      }
      // Toggle theme with Ctrl/Cmd + Shift + D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        Theme.toggle();
      }
      // Escape clears input
      if (e.key === 'Escape' && document.activeElement.id === 'task-input') {
        document.activeElement.value = '';
        document.activeElement.blur();
      }
    });
  }
};