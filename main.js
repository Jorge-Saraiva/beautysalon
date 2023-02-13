// Abre e fecha o menu
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Apó selecionar um ite m do menubar, fecha-lo
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

// Mudar o header da página quando der 'scroll'
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}

// Testimonials carousel slider swiper
const swiper = new Swiper(".swiper-container", {
  swiperPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scrollreveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700, //milisegundos
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
);

// Button back to top
const backToTopButton = document.querySelector(".back-to-top");
function backTotop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Menu ativo conforme seção ativa da página
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    const sectionIdActive = document.querySelector('nav ul li a[href*=' + sectionId + ']')


    if (checkpointStart && checkpointEnd) {
      sectionIdActive.classList.add("active")
    } else {
      sectionIdActive.classList.remove("active")
    }
  }
}


// When scroll
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backTotop();
  activateMenuAtCurrentSection();
});
