const items = [
  // --- Research Areas ---
  {
    type: "research",
    title: "Artificial Intelligence & Data Science",
    category: "Engineering",
    description:
      "Pioneering machine learning and big data solutions to empower smarter systems across industries.",
    briefing:
      "This research focuses on AI models for predictive analytics, robotics, and automation.",
    leadProfessor: "Dr. John Smith",
    objectives:
      "Develop AI algorithms to improve predictive accuracy and build AI-based applications.",
    funding: "$500,000 from NSF",
    duration: "2023-2027",
    achievements:
      "Published 10 papers, developed 3 AI prototypes, presented at international conferences.",
    image: "images/datascience.jpg",
  },
  {
    type: "research",
    title: "Renewable Energy & Sustainability",
    category: "Engineering",
    description:
      "Driving clean energy solutions and environmental sustainability for a greener future.",
    briefing:
      "Study on solar, wind, and smart grid technologies for sustainable energy.",
    leadProfessor: "Dr. Emily Johnson",
    objectives:
      "Design sustainable energy systems and improve efficiency of renewable sources.",
    funding: "$750,000 from DOE",
    duration: "2022-2026",
    achievements:
      "Installed smart solar panels on campus, published 8 research papers.",
    image: "images/renewacle.png",
  },
  {
    type: "research",
    title: "Biomedical & Health Sciences",
    category: "Health",
    description:
      "Advancing medical research, biotechnology, and public health innovation to improve lives.",
    briefing:
      "Research in medical devices, vaccines, and healthcare improvements.",
    leadProfessor: "Dr. Sarah Lee",
    objectives:
      "Develop new biomedical devices and improve healthcare delivery systems.",
    funding: "$1,000,000 from NIH",
    duration: "2023-2025",
    achievements:
      "Developed wearable health monitor prototype, published 12 papers.",
    image: "images/medical.jpg",
  },
  {
    type: "research",
    title: "Cybersecurity & Information Systems",
    category: "Science",
    description:
      "Protecting global data and digital infrastructure through advanced research in cybersecurity.",
    briefing:
      "Focus on network security, encryption, and cyber threat intelligence.",
    leadProfessor: "Dr. Mark Thompson",
    objectives:
      "Create secure networks and develop advanced threat detection systems.",
    funding: "$600,000 from Cybersecurity Grants",
    duration: "2023-2026",
    achievements:
      "Published 7 papers, developed prototype intrusion detection software.",
    image: "images/cyber.jpg",
  },
  {
    type: "research",
    title: "Climate & Environmental Studies",
    category: "Science",
    description:
      "Understanding climate change and developing sustainable ecological policies.",
    briefing:
      "Research on climate change mitigation, ecosystem preservation, and policy.",
    leadProfessor: "Dr. Lisa Carter",
    objectives:
      "Study climate change patterns and develop actionable environmental policies.",
    funding: "$400,000 from EPA",
    duration: "2022-2025",
    achievements:
      "Published 9 papers, contributed to local environmental policy changes.",
    image: "images/climet.jpg",
  },
  {
    type: "research",
    title: "Social Science & Policy Innovation",
    category: "Arts",
    description:
      "Examining social behavior, governance, and human development to shape better societies.",
    briefing:
      "Study of human behavior, social policies, and governance frameworks.",
    leadProfessor: "Dr. Robert Wilson",
    objectives:
      "Analyze social patterns and improve policy-making for community development.",
    funding: "$300,000 from Social Research Grants",
    duration: "2023-2025",
    achievements: "Published 6 papers, conducted 4 community policy workshops.",
    image: "images/social.jpg",
  },

  // --- Recent Projects ---
  {
    type: "project",
    title: "Smart Campus Energy Monitoring",
    description: "IoT and AI reduce energy consumption across SUNY campuses.",
    briefing:
      "This project integrates IoT sensors and AI algorithms to monitor and optimize energy usage in SUNY buildings. Goals include reducing consumption, saving costs, and improving sustainability.",
    leadProfessor: "Dr. Alan Walker",
    duration: "2023-2026",
    funding: "$200,000 from Campus Sustainability Fund",
    achievements:
      "Installed smart meters in 5 campus buildings, published 3 conference papers.",
    image: "images/smart.png",
  },
  {
    type: "project",
    title: "COVID-19 Vaccine Efficiency Study",
    description:
      "Biomedical research focusing on next-gen vaccine delivery systems.",
    briefing:
      "The project evaluates efficacy and safety of novel vaccine delivery methods, aiming to improve immunization outcomes and distribution efficiency.",
    leadProfessor: "Dr. Emily Carter",
    duration: "2022-2024",
    funding: "$500,000 from NIH",
    achievements:
      "Conducted clinical trials with 200 participants, published 5 papers.",
    image: "images/covid.png",
  },
  {
    type: "project",
    title: "AI-based Agriculture Monitoring",
    description:
      "Satellite data and AI algorithms optimize farming yield sustainably.",
    briefing:
      "This project uses satellite imagery and machine learning models to monitor crop health, predict yields, and recommend sustainable farming practices.",
    leadProfessor: "Dr. Rachel Green",
    duration: "2023-2025",
    funding: "$300,000 from USDA",
    achievements:
      "Developed AI crop monitoring tool, partnered with 10 local farms.",
    image: "images/agro.jpeg",
  },
];

// --- Make cards clickable ---
// Attach click event to all research and project cards
document.querySelectorAll(".research-card, .project").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const index = parseInt(card.dataset.index); // get exact index
    localStorage.setItem("selectedItem", JSON.stringify(items[index]));
    window.location.href = "research-details.html";
  });
});
