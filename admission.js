// --- Course list (same as course.js titles) ---
const courseTitles = [
  "Computer Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
  "Business Administration",
  "Accounting & Finance",
  "Marketing Management",
  "Entrepreneurship & Innovation",
  "Biological Sciences",
  "Chemistry",
  "Physics",
  "Environmental Science",
  "Fine Arts",
  "English Literature",
  "History & Culture",
  "Music & Performing Arts",
  "Information Technology",
  "Nursing & Health Care",
];

// Populate dropdown
const courseSelect = document.getElementById("course");
courseTitles.forEach((title) => {
  const option = document.createElement("option");
  option.value = title;
  option.textContent = title;
  courseSelect.appendChild(option);
});

// Auto-select course from localStorage
const selectedCourse = localStorage.getItem("selectedCourseForAdmission");
if (selectedCourse) {
  courseSelect.value = selectedCourse;
}

// Handle form submit
document.getElementById("admissionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fullName").value;
  const course = courseSelect.value;
  const type = document.getElementById("admissionType").value;

  alert(
    `🎓 Thank you, ${name}!\nYour ${type} admission application for "${course}" has been submitted successfully.`
  );

  e.target.reset();
  localStorage.removeItem("selectedCourseForAdmission");
});
