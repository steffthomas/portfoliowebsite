const toggleBtns = [
  document.getElementById("theme-toggle"),
  document.getElementById("theme-toggle-footer")
].filter(Boolean); // in case one doesn't exist

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtns.forEach(btn => btn.innerHTML = '<i class="fas fa-sun"></i>');
}

// Toggle theme on click
toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtns.forEach(b =>
      b.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
    );
  });
});

const text = "Hi, I'm Stefy ";
let index = 0;

function typeText() {
  const el = document.getElementById("typing-text");
  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    // Remove cursor
    el.style.borderRight = "none";
    el.style.animation = "none";
  }
}

window.onload = typeText;
