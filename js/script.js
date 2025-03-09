document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    
    if (iconMenu) {
        iconMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('menu-open');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }

    // Close menu when clicking menu items
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.body.classList.remove('menu-open');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu__body') && !e.target.closest('.icon-menu') && menuBody.classList.contains('_active')) {
            document.body.classList.remove('menu-open');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
