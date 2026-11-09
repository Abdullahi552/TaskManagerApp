/* App entry point */
const App = {
  init() {
    State.load();
    Render.init();
    Notifications.init();
    Theme.init();
    Keyboard.init();
    Events.init();
    Render.updateFilterButtons();
    Render.renderTasks();
    console.log('✅ Task Manager initialized');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());