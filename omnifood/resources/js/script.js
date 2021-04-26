
/* Sticky Navigation */
const navBar = document.querySelector('nav');
const features = document.querySelector('.js--section-features');

const offsetVar = features.offsetTop - 60;

const stickyBar = () => {
  if (window.pageYOffset >= features.offsetTop) {
    // add the sticky class to the navigation Bar when you scroll to features section
    if (!navBar.classList.contains("sticky")) {
      navBar.classList.add("sticky");
    }

  } else {
    navBar.classList.remove("sticky");
    if (window.pageYOffset > offsetVar) {
      if (!navBar.classList.contains("sticky")) {
        navBar.classList.add("sticky");
      }
    }
  }
};
window.addEventListener('scroll', stickyBar);


// scroll to section on clicking buttons
const scrollToSection = function (btnScroll, elemToScrollTo) {
  const scrollFunction = function (event) {
    event.preventDefault();
    const offSet = document.querySelector(`#${elemToScrollTo}`).offsetTop;
    scroll({
      top: offSet,
      behavior: "smooth"
    })
  };

  document.querySelector(`.${btnScroll}`).addEventListener('click', scrollFunction)
};

window.addEventListener('DOMContentLoaded' ,function () {  //when document has loaded all the attributes unlike .
  scrollToSection( "plansBtn", "plans");  //scroll to plans
  scrollToSection("startBtn", "features")  //scroll to features
})


// Navigation Bar Links
links = document.querySelectorAll('nav li a');
links.forEach((link) => {
  const href = link.attributes.href.value;
  const destination = document.querySelector(`${href}`);

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    const nav = document.querySelector('.main-nav');
    nav.classList.add('hideMainNav');
    if (!nav.classList.contains('hideMainNav')) {
      document.querySelector('.mobile-nav-icon i').className = "ion-close-round";
    } else {
      document.querySelector('.mobile-nav-icon i').className = "ion-navicon-round";
    }
    const offSetTop = destination.offsetTop;
    scroll({
      top: offSetTop,
      behavior: 'smooth'
    });
  });
});


// Animations on Scroll
const animate = (elemClass, args) => {
  const elem = document.querySelector(`.${elemClass}`);
  window.addEventListener('scroll' , () => {
    let offset = elem.offsetTop;
    offset = offset - (0.45 * window.innerHeight);
    if (window.pageYOffset >= offset) {
      elem.classList.add('animated', 'animate__animated', ...args);
    }
  })
};

// fadeIn animation in features div
animate("anim1", ['animate__fadeIn']);

// fadeInUp animation in iphone image
animate("anim2", ['animate__fadeInUp'])

// fadeIn animation in cities Section
animate("anim3", ['animate__fadeIn'])

// pulse animation in first plan for attention
animate("anim4", ['animate__pulse'])



// Mobile navigation
const navIcon = document.querySelector('.mobile-nav-icon');
navIcon.addEventListener('click', () => {

    const nav = document.querySelector('.main-nav');
    // nav.classList.add('animate__animated', 'animate__slideInDown')
    nav.classList.toggle('hideMainNav');
    nav.classList.add('animate__animated', 'animate__fadeIn');
    document.querySelectorAll('.main-nav li').forEach((link) => {
      link.classList.add('animate__animated', 'animate__fadeIn')
    });

    if (!nav.classList.contains('hideMainNav')) {
      document.querySelector('.mobile-nav-icon i').className = "ion-close-round";
    } else {
      document.querySelector('.mobile-nav-icon i').className = "ion-navicon-round";
    }

});