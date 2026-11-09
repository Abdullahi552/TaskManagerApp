/* Filter logic */
const Filters = {
  set(filter) {
    if (!CONFIG.FILTERS.includes(filter)) return;
    State.filter = filter;
    Render.updateFilterButtons();
    Render.renderTasks();
  }
};