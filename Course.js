const courses = [
  // --- Engineering ---
  {
    title: "Computer Engineering",
    category: "engineering",
    description:
      "Learn computer hardware, software systems, and embedded technologies.",
    duration: "4 Years",
    admissionFee: "$1,200",
    labFee: "$500",
    creditHourFee: "$150",
    totalCredits: 120,
  },
  {
    title: "Electrical Engineering",
    category: "engineering",
    description:
      "Explore power systems, electronics, and signal processing fundamentals.",
    duration: "4 Years",
    admissionFee: "$1,100",
    labFee: "$450",
    creditHourFee: "$145",
    totalCredits: 120,
  },
  {
    title: "Civil Engineering",
    category: "engineering",
    description:
      "Design and construct sustainable buildings, bridges, and infrastructure.",
    duration: "4 Years",
    admissionFee: "$1,000",
    labFee: "$400",
    creditHourFee: "$140",
    totalCredits: 120,
  },
  {
    title: "Mechanical Engineering",
    category: "engineering",
    description:
      "Master machine design, thermodynamics, and manufacturing technologies.",
    duration: "4 Years",
    admissionFee: "$1,150",
    labFee: "$480",
    creditHourFee: "$145",
    totalCredits: 120,
  },

  // --- Business ---
  {
    title: "Business Administration",
    category: "business",
    description:
      "Gain leadership and management skills for modern organizations.",
    duration: "3 Years",
    admissionFee: "$800",
    labFee: "$0",
    creditHourFee: "$120",
    totalCredits: 90,
  },
  {
    title: "Accounting & Finance",
    category: "business",
    description:
      "Develop analytical and strategic thinking in global finance and taxation.",
    duration: "3 Years",
    admissionFee: "$850",
    labFee: "$0",
    creditHourFee: "$130",
    totalCredits: 90,
  },
  {
    title: "Marketing Management",
    category: "business",
    description:
      "Learn branding, digital marketing, and consumer behavior strategies.",
    duration: "3 Years",
    admissionFee: "$820",
    labFee: "$0",
    creditHourFee: "$125",
    totalCredits: 90,
  },
  {
    title: "Entrepreneurship & Innovation",
    category: "business",
    description:
      "Turn creative ideas into successful startups through practical business models.",
    duration: "3 Years",
    admissionFee: "$900",
    labFee: "$0",
    creditHourFee: "$130",
    totalCredits: 90,
  },

  // --- Science ---
  {
    title: "Biological Sciences",
    category: "science",
    description: "Study life at molecular, cellular, and ecological levels.",
    duration: "4 Years",
    admissionFee: "$950",
    labFee: "$400",
    creditHourFee: "$140",
    totalCredits: 120,
  },
  {
    title: "Chemistry",
    category: "science",
    description:
      "Explore organic, inorganic, and physical chemistry principles.",
    duration: "4 Years",
    admissionFee: "$900",
    labFee: "$420",
    creditHourFee: "$140",
    totalCredits: 120,
  },
  {
    title: "Physics",
    category: "science",
    description:
      "Understand motion, energy, and the universe through fundamental laws.",
    duration: "4 Years",
    admissionFee: "$950",
    labFee: "$380",
    creditHourFee: "$135",
    totalCredits: 120,
  },
  {
    title: "Environmental Science",
    category: "science",
    description:
      "Examine global environmental challenges and sustainable solutions.",
    duration: "4 Years",
    admissionFee: "$970",
    labFee: "$390",
    creditHourFee: "$140",
    totalCredits: 120,
  },

  // --- Arts & Humanities ---
  {
    title: "Fine Arts",
    category: "arts",
    description:
      "Explore creativity through painting, sculpture, and digital design.",
    duration: "3 Years",
    admissionFee: "$700",
    labFee: "$200",
    creditHourFee: "$110",
    totalCredits: 90,
  },
  {
    title: "English Literature",
    category: "arts",
    description:
      "Study classic and modern literature, writing, and critical theory.",
    duration: "3 Years",
    admissionFee: "$750",
    labFee: "$0",
    creditHourFee: "$115",
    totalCredits: 90,
  },
  {
    title: "History & Culture",
    category: "arts",
    description:
      "Understand human civilization through historical and cultural analysis.",
    duration: "3 Years",
    admissionFee: "$720",
    labFee: "$0",
    creditHourFee: "$110",
    totalCredits: 90,
  },
  {
    title: "Music & Performing Arts",
    category: "arts",
    description: "Develop musical skills and stage performance techniques.",
    duration: "3 Years",
    admissionFee: "$780",
    labFee: "$250",
    creditHourFee: "$115",
    totalCredits: 90,
  },

  // --- Extra ---
  {
    title: "Information Technology",
    category: "science",
    description:
      "Learn software systems, networking, databases, and IT infrastructure for digital enterprises.",
    duration: "4 Years",
    admissionFee: "$1,000",
    labFee: "$450",
    creditHourFee: "$150",
    totalCredits: 120,
  },
  {
    title: "Nursing & Health Care",
    category: "science",
    description:
      "Prepare for a career in healthcare with clinical skills, patient care, and medical science.",
    duration: "4 Years",
    admissionFee: "$1,100",
    labFee: "$500",
    creditHourFee: "$155",
    totalCredits: 120,
  },
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const coursesContainer = document.getElementById("coursesContainer");

// --- Render Courses ---
function renderCourses(filteredCourses) {
  coursesContainer.innerHTML = "";
  filteredCourses.forEach((c, index) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <p><strong>Duration:</strong> ${c.duration}</p>
      <div class="btn-group">
        <button class="enroll-btn" data-index="${index}">Enroll Now</button>
        <button class="details-btn" data-index="${index}">Details</button>
      </div>
    `;
    coursesContainer.appendChild(card);
  });

  // --- Handle "Details" button ---
  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", showDetailsPage);
  });

  // --- Handle "Enroll" button ---
  document.querySelectorAll(".enroll-btn").forEach((btn) => {
    btn.addEventListener("click", goToAdmissionPage);
  });
}

// --- Filter Courses ---
function updateCourses() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = courses.filter((c) => {
    const matchCategory = category === "all" || c.category === category;
    const matchSearch = c.title.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  renderCourses(filtered);
}

// --- Go to Course Details Page ---
function showDetailsPage(e) {
  const index = e.target.dataset.index;
  localStorage.setItem("selectedCourse", JSON.stringify(courses[index]));
  window.location.href = "course-details.html";
}

// --- Go to Admission Page ---
function goToAdmissionPage(e) {
  const index = e.target.dataset.index;
  const selectedCourse = courses[index];
  localStorage.setItem("selectedCourseForAdmission", selectedCourse.title);
  window.location.href = "admission.html";
}

// --- Initial Render ---
searchInput.addEventListener("input", updateCourses);
categoryFilter.addEventListener("change", updateCourses);
renderCourses(courses);
