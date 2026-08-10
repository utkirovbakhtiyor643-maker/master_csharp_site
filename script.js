document.getElementById("year").textContent = new Date().getFullYear();

// RoboContest statistikangizni bilganingizda faqat shu 3 ta qiymatni o'zgartiring:
const roboStats = {
  solved: "—",
  contests: "—",
  rating: "—"
};

document.getElementById("solvedCount").textContent = roboStats.solved;
document.getElementById("contestCount").textContent = roboStats.contests;
document.getElementById("ratingValue").textContent = roboStats.rating;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
