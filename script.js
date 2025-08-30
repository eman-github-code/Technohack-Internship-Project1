// Typing Effect
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typing-text');
  if (!el) return;

  const texts = [
    "Web Developer",
    "React Enthusiast",
    "Python Programmer",
    "Tech Explorer"
  ];

  const TYPING_SPEED = 80;   // ms per char (typing)
  const ERASING_SPEED = 35;  // ms per char (erasing)
  const PAUSE_AFTER = 1300;  // pause after a full word is typed

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = texts[textIndex];
    if (!isDeleting) {
      // type forward
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        // word finished — pause then start deleting
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      // deleting
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, ERASING_SPEED);
    }
  }

  // small initial delay so name renders first
  setTimeout(tick, 500);
});


// Show first text
changeText();

// Update text every 4s
setInterval(changeText, 4000);

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! I'll reply soon.");
  this.reset();
});
