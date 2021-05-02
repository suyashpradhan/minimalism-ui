const sidebarToggle = document.querySelector("#toggle");
const sidebar = document.querySelector("#sidebar");
const mainContent = document.querySelector("#main");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-toggled");
  mainContent.classList.toggle("main-section-toggled");
});
