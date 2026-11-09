/* Task CRUD operations */
const Tasks = {
  add(text) {
    const task = {
      id: Utils.uid(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    State.tasks.unshift(task);
    State.save();
    return task;
  },

  toggle(id) {
    const task = State.tasks.find((t) => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    State.save();
  },

  update(id, text) {
    const task = State.tasks.find((t) => t.id === id);
    if (!task) return;
    task.text = text;
    State.save();
  },

  remove(id) {
    State.tasks = State.tasks.filter((t) => t.id !== id);
    State.save();
  },

  clearCompleted() {
    State.tasks = State.tasks.filter((t) => !t.completed);
    State.save();
  }
};