document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.Masonry !== "function") {
    return;
  }

  const initMasonry = (grid, options = {}) => {
    const masonry = new window.Masonry(grid, {
      gutter: 10,
      horizontalOrder: true,
      percentPosition: true,
      itemSelector: ".grid-item",
      ...options,
    });

    const relayout = () => masonry.layout();

    if (typeof window.imagesLoaded === "function") {
      const tracker = window.imagesLoaded(grid);
      if (tracker && typeof tracker.on === "function") {
        tracker.on("progress", relayout);
        tracker.on("always", relayout);
        return;
      }
    }

    relayout();
    window.addEventListener("resize", relayout);
  };

  const projectsGrid = document.querySelector(".projects .grid");
  if (projectsGrid) {
    initMasonry(projectsGrid);
  }
});
