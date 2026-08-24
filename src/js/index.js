// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.classList.add("top-0");
      navbar.classList.remove("top-5");
    } else {
      navbar.classList.remove("top-0");
      navbar.classList.add("top-5");
    }
  }
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 2500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 7 }
  }
});

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Open Menu
if (openMenu) {
  openMenu.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
    }, 10);
  });
}

// Close Function
function closeSidebar() {
  sideMenu.classList.add("translate-x-full");
  overlay.classList.add("opacity-0");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
}

// Close Events
if (closeMenu) {
  closeMenu.addEventListener("click", closeSidebar);
}

if (overlay) {
  overlay.addEventListener("click", closeSidebar);
}

// Products Toggle - FIXED with null check
const productToggle = document.getElementById("productToggle");
const productMenu = document.getElementById("productMenu");
const productArrow = document.getElementById("productArrow");

if (productToggle && productMenu && productArrow) {
  productToggle.addEventListener("click", () => {
    productMenu.classList.toggle("hidden");
    productArrow.classList.toggle("rotate-180");
  });
} else {
  console.log('Product toggle elements not found on this page');
}

// FAQ Accordion - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
  const faqButtons = document.querySelectorAll('.faq-btn');
  
  console.log('FAQ buttons found:', faqButtons.length);
  
  faqButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      
      console.log('FAQ clicked!');
      
      // Check if this content is currently open
      const isOpen = content.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.faq-content').forEach(el => {
        el.classList.remove('active');
        el.style.maxHeight = '0px';
        el.style.padding = '0 1.5rem';
      });
      
      // Reset all icons
      document.querySelectorAll('.faq-icon').forEach(i => {
        i.classList.remove('rotate-45');
        i.textContent = '+';
      });
      
      // If it was closed, open it
      if (!isOpen) {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0 1.5rem';
        icon.classList.add('rotate-45');
        icon.textContent = '−';
      }
    });
  });
});

document.querySelectorAll('[data-tabs-target]').forEach(tab => {
  tab.addEventListener('click', () => {
    setTimeout(() => {
      const targetId = tab.getAttribute('data-tabs-target');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const offset = 120;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    }, 120);
  });
});