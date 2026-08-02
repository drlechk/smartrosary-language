(() => {
  const list = Array.isArray(window.NvsEditorFixtures) ? window.NvsEditorFixtures : [];

  window.registerNvsEditorFixture = (fixture) => {
    if (!fixture || typeof fixture !== "object") return;
    list.push(fixture);
    window.NvsEditorFixtures = list;
  };

  window.NvsEditorFixtures = list;
})();
