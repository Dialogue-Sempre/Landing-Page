(function () {
  var STORAGE_KEY = 'dialogue-content-draft';

  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      if (acc == null) return undefined;
      return acc[key];
    }, obj);
  }

  function applyDraft(draft) {
    if (!draft) return;
    document.querySelectorAll('[data-content-file][data-content-path]').forEach(function (el) {
      var file = el.getAttribute('data-content-file');
      var path = el.getAttribute('data-content-path');
      var attr = el.getAttribute('data-cms-attr');
      if (!file || !path || !draft[file]) return;
      var value = getByPath(draft[file], path);
      if (typeof value !== 'string') return;
      if (attr) {
        el.setAttribute(attr, value);
      } else if (!el.isContentEditable) {
        el.textContent = value;
      }
    });
  }

  function loadAndApply() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      applyDraft(JSON.parse(raw));
    } catch (e) {}
  }

  loadAndApply();

  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_KEY) loadAndApply();
  });

  window.addEventListener('dialogue:content-updated', function (event) {
    if (event.detail) applyDraft(event.detail);
    else loadAndApply();
  });
})();
