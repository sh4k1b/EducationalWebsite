document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;

  alert(
    `📩 Thank you, ${name}!\nYour message about "${subject}" has been received. We’ll get back to you soon.`
  );

  e.target.reset();
});
