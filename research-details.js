const research = JSON.parse(localStorage.getItem("selectedItem"));

if (research) {
  document.getElementById("researchTitle").textContent = research.title;
  document.getElementById("researchBriefing").textContent = research.briefing;
  document.getElementById("researchCategory").textContent =
    research.category || "-";
  document.getElementById("researchProfessor").textContent =
    research.leadProfessor;
  document.getElementById("researchObjectives").textContent =
    research.objectives || "-";
  document.getElementById("researchFunding").textContent =
    research.funding || "-";
  document.getElementById("researchDuration").textContent =
    research.duration || "-";
  document.getElementById("researchAchievements").textContent =
    research.achievements || "-";
  if (research.image) {
    document.getElementById("researchImage").src = research.image;
  }
} else {
  window.location.href = "research.html"; // redirect if no item
}

function goBack() {
  window.location.href = "research.html";
}
