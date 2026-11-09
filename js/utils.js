/* Utility helpers */
const Utils = {
  uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  },

  escapeHtml(str) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(str).replace(/[&<>"']/g, (c) => map[c]);
  },

  debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  qs(selector, scope = document) {
    return scope.querySelector(selector);
  },

  qsa(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
  }
};