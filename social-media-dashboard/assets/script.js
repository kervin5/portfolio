((document) => {
  const themeName = "dashboard--light";
  const toggleBtn = document.querySelector(".toggle .toggle__button");
  initialize();
  toggleBtn.addEventListener("click", toggleTheme);

  function toggleTheme() {
    const dashboardContainer = document.querySelector(".dashboard");
    if (dashboardContainer.classList.contains(themeName)) {
      dashboardContainer.classList.remove(themeName);
      removeTheme();
    } else {
      dashboardContainer.classList.add(themeName);
      saveTheme(themeName);
    }
  }

  function initialize() {
    const dashboardContainer = document.querySelector(".dashboard");
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      dashboardContainer.classList.add(themeName);
    } else {
      dashboardContainer.classList.remove(themeName);
    }
  }

  function saveTheme(themeName) {
    localStorage.setItem("theme", themeName);
  }

  function removeTheme() {
    localStorage.removeItem("theme");
  }
})(document);
