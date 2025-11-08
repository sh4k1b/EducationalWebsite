// --- Get selected course from localStorage ---
const course = JSON.parse(localStorage.getItem("selectedCourse"));

if (course) {
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseDescription").textContent = course.description;
  document.getElementById("courseDuration").textContent = course.duration;
  document.getElementById("courseAdmission").textContent = course.admissionFee;
  document.getElementById("courseLab").textContent = course.labFee;
  document.getElementById("courseCreditFee").textContent = course.creditHourFee;
  document.getElementById("courseCredits").textContent = course.totalCredits;
} else {
  // If no course found (direct access), redirect back
  window.location.href = "Course.html";
}

// --- Apply Now Button ---
const applyNowBtn = document.getElementById("applyNowBtn");
applyNowBtn.addEventListener("click", () => {
  // Save selected course for admission page
  localStorage.setItem("selectedCourseForAdmission", JSON.stringify(course));
  // Redirect to admission page
  window.location.href = "admission.html";
});

// --- Go Back Button ---
function goBack() {
  window.location.href = "Course.html"; // your course list page
}
