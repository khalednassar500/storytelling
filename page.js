function toggleNav() {
  let navLinks = document.getElementById("nav_links");
  navLinks.classList.toggle("active");
  document.getElementById("toggle_nav_btn").innerHTML =
    navLinks.classList.contains("active") ? "×" : "≡";
}

function toggleStory() {
  document.getElementById("story_con").classList.toggle("active");
}
