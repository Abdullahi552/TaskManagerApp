/* DOM rendering */
const Render = {
  taskList: null,
  emptyState: null,
  taskCount: null,

  init() {
    this.taskList = Utils.qs('#task-list');
    this.emptyState = Utils.qs('#empty-state');
    this.taskCount = Utils.qs('#task-count');
  },

  taskItem(task) {
    const li = document.createElement('li');
    li.className = `task-item${task.completed ? ' completed' : ''}`;
    li.dataset.id = task.id;
    li.innerHTML = `
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} aria-label="Toggle task" />
      <span class="task-text">${Utils.escapeHtml(task.text)}</span>
      <div class="task-actions">
        <button class="task-btn edit-btn" aria-label="Edit task">✏️</button>
        <button class="task-btn delete-btn" aria-label="Delete task">🗑️</button>
      </div>
    `;
    return li;
  },

  renderTasks() {
    const visible = State.getVisibleTasks();
    this.taskList.innerHTML = '';
    visible.forEach((task) => this.taskList.appendChild(this.taskItem(task)));
    this.emptyState.classList.toggle('visible', visible.length === 0);
    this.renderCount();
  },

  renderCount() {
    const active = State.countActive();
    this.taskCount.textContent = `${active} active · ${State.tasks.length} total`;
  },

  updateFilterButtons() {
    Utils.qsa('.filter-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === State.filter);
    });
  }
};