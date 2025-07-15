 const carouselText = [
  "Chartered Accountant",
  "DISA Qualified",
  "Experienced Auditor",
  "Tax Consultant"
]

const intro = document.getElementById("introduction")

document.addEventListener("DOMContentLoaded", async function() {
  carousel(carouselText, intro)
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    (eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = (eleRef).textContent;
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    (eleRef).innerHTML = letters.join("");
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      await typeSentence(carouselList[i], eleRef);
      await waitForMs(1000);
      await deleteSentence(eleRef);
      await waitForMs(100);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sendEmail() {  
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("description").value;
  
  // Validate form data
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields!");
    return false;
  }
  
  // Show loading state
  const submitButton = document.querySelector('.contact__button button');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = 'Sending...';
  submitButton.disabled = true;
  
  // Prepare email data
  const emailData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };
  
  // Initialize EmailJS
  emailjs.init("2SANbbxbOTQyHEE4V"); // Replace with your EmailJS public key
  
  // EmailJS configuration
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: 'singlaraghav200@gmail.com'
  };
  
  // Send email using EmailJS
  emailjs.send('service_yohbyui', 'template_ps5gy58', templateParams)
    .then(function(response) {
      alert("Thank you! Your message has been sent successfully.");
      // Reset form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("description").value = "";
    })
    .catch(function(error) {
      alert("Sorry, there was an error sending your message. Please contact directly via email: singlaraghav200@gmail.com");
      console.error("Email error:", error);
    })
    .finally(function() {
      // Reset button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
  
  return false;
}

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

let swiperTestimonial = new Swiper(".testimonial__container", {
  cssMode: true,
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: true,
  /* keyboard: true, */
});

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Set dark mode as default if no theme is saved
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
} else {
  // Default to dark mode if no theme is saved
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-moon");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

