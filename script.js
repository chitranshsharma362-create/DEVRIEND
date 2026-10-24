const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Preselect the package when a visitor clicks a package CTA.
document.querySelectorAll("[data-package]").forEach((button) => {
  button.addEventListener("click", () => {
    const packageSelect = document.getElementById("package");
    if (packageSelect) packageSelect.value = button.dataset.package;
  });
});

// Update WHATSAPP_NUMBER before publishing. Use country code, digits only (India: 91...).
const WHATSAPP_NUMBER = "917976316714";

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const business = String(data.get("business") || "").trim();
  const packageChoice = String(data.get("package") || "Not sure yet");
  const message = String(data.get("message") || "").trim();

  const text = [
    "Hi DEVRIEND! I'd like to discuss a website project.",
    `Name: ${name}`,
    business ? `Business: ${business}` : "",
    `Package: ${packageChoice}`,
    message ? `Project details: ${message}` : ""
  ].filter(Boolean).join("\n");

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Before publishing, open script.js and replace WHATSAPP_NUMBER with your WhatsApp number including country code (for example, 919876543210).");
    return;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
