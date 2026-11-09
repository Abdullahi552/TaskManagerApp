/* Event bindings */
const Events = {
  init() {
    this.bindForm();
    this.bindTaskList();
    this.bindFilters();
  },

  bindForm() {
    const form = Utils.qs('#task-form');
    const input = Utils.qs('#task-input');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const result = Validation.validateTaskText(input.value);
      if (!result.valid) {
        input.classList.add('error');
        Notifications.error(result.error);
        return;
      }
      input.classList.remove('error');
      Tasks.add(result.value);
      input.value = '';
      Render.renderTasks();
      Notifications.success('Task added!');
    });

    input.addEventListener('input', () => input.classList.remove('error'));
  },

  bindTaskList() {
    Render.taskList.addEventListener('click', (e) => {
      const li = e.target.closest('.task-item');
      if (!li) return;
      const id = li.dataset.id;

      if (e.target.matches('.task-checkbox')) {
        Tasks.toggle(id);
        Render.renderTasks();
      } else if (e.target.matches('.delete-btn')) {
        Tasks.remove(id);
        Render.renderTasks();
        Notifications.success('Task deleted.');
      } else if (e.target.matches('.edit-btn')) {
        const task = State.tasks.find((t) => t.id === id);
        const newText = prompt('Edit task:', task.text);
        if (newText === null) return;
        const result = Validation.validateTaskText(newText);
        if (!result.valid) {
          Notifications.error(result.error);
          return;
        }
        Tasks.update(id, result.value);
        Render.renderTasks();
        Notifications.success('Task updated.');
      }
    });
  },

  bindFilters() {
    Utils.qsa('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => Filters.set(btn.dataset.filter));
    });
  }
};