/* Input validation */
const Validation = {
  validateTaskText(text) {
    const trimmed = String(text || '').trim();
    if (!trimmed) return { valid: false, error: 'Task cannot be empty.' };
    if (trimmed.length > CONFIG.MAX_TASK_LENGTH) {
      return { valid: false, error: `Task must be under ${CONFIG.MAX_TASK_LENGTH} characters.` };
    }
    return { valid: true, value: trimmed };
  }
};