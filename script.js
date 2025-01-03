document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const floatingQuote = document.querySelector(".floating-quote");
    const quoteDialog = document.querySelector(".quote-dialog");
    const closeDialog = document.querySelector(".close-dialog");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // Show dialog on floating quote click
    floatingQuote.addEventListener("click", () => {
        quoteDialog.style.display = "block";
        overlay.style.display = "block";
    });

    // Hide dialog on close button or overlay click
    const hideDialog = () => {
        quoteDialog.style.display = "none";
        overlay.style.display = "none";
    };

    closeDialog.addEventListener("click", hideDialog);
    overlay.addEventListener("click", hideDialog);
});
//Javascript code for product
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
//typewriter
document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to the World of Innovation";
    const typewriterElement = document.getElementById("typewriter");
    
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 200); // Adjust typing speed
        } else {
            // Remove the typewriter after a delay
            setTimeout(() => {
                typewriterElement.style.display = "none";
            }, 3000); // Adjust delay before disappearing
        }
    }

    typeWriter();
});



