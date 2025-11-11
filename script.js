// 1️⃣ --- Bouton Télécharger / Imprimer ---
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const confirmDownload = confirm("Voulez-vous télécharger ou imprimer le CV ?");
  if (confirmDownload) {
    window.print();
  }
});

// 2️⃣ --- Afficher la date actuelle automatiquement ---
const today = new Date();
const dateElement = document.createElement("p");
dateElement.textContent = `📅 Dernière mise à jour : ${today.toLocaleDateString("fr-FR")}`;
dateElement.style.textAlign = "right";
dateElement.style.fontSize = "13px";
dateElement.style.color = "#666";
dateElement.style.marginTop = "20px";
document.querySelector(".content").appendChild(dateElement);

// 3️⃣ --- Animation au défilement (apparition douce des sections) ---
const sections = document.querySelectorAll("section, article");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("hidden");
  appearOnScroll.observe(section);
});
// --- Animation des barres de progression ---
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const width = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});
// --- Animation des barres de langue ---
window.addEventListener("load", () => {
  const langs = document.querySelectorAll(".lang-progress");
  langs.forEach(bar => {
    const width = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });
});