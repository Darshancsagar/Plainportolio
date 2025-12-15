function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
  document.body.style.overflow = menu.classList.contains("open")
    ? "hidden"
    : "auto";
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("open");
  document.body.style.overflow = "auto";
}


