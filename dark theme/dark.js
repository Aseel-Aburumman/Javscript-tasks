function DarkMode() {
  const body = document.body;
  const hehe = document.getElementById("hehe");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    sessionStorage.setItem("mode", "dark");
    hehe.style.display = "block";
  } else {
    sessionStorage.setItem("mode", "light");
    hehe.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hehe = document.getElementById("hehe");

  const savedMode = sessionStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    hehe.style.display = "block";
  } else {
    document.body.classList.add("light-mode");
    hehe.style.display = "none";
  }

  const toggleButton = document.getElementById("toggleMode");
  toggleButton.addEventListener("click", DarkMode);
});
