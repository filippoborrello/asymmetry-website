document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = `Asymmetry: ${data.get("topic")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}`;
    window.location.href = `mailto:fmb48@georgetown.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
