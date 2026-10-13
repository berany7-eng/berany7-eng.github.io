const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");

function updateThemeButton() {
  const isLightTheme = root.classList.contains("light-theme");

  themeToggle.textContent = isLightTheme
    ? "Tmavý režim"
    : "Světlý režim";

  themeToggle.setAttribute("aria-pressed", String(isLightTheme));
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("light-theme");
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light-theme");

  const currentTheme = root.classList.contains("light-theme")
    ? "light"
    : "dark";

  localStorage.setItem("theme", currentTheme);
  updateThemeButton();
});
