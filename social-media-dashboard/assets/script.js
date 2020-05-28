((document) => {
  const toggleBtn = document.querySelector(".toggle .toggle__button");
  const dashboardContainer = document.querySelector(".dashboard");
  toggleBtn.addEventListener("click", () => {
    if (dashboardContainer.classList.contains("dashboard--light")) {
      dashboardContainer.classList.remove("dashboard--light");
    } else {
      dashboardContainer.classList.add("dashboard--light");
    }
  });
})(document);
