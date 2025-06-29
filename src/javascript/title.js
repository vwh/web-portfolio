(function () {
  const handle = setInterval(() => {
    const titleEl = document.querySelector("title");
    if (!titleEl) return;

    const baseTitle = titleEl.textContent;
    let newText;

    if (baseTitle == baseTitle.toUpperCase()) {
      newText = baseTitle.toLowerCase();
    } else {
      newText = baseTitle.toUpperCase();
    }

    titleEl.textContent = newText;
    document.title = newText;
  }, 350);

  globalThis.stopTitleShift = () => clearInterval(handle);
})();
