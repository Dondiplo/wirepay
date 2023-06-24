// Get the menu and close buttons
var menu = document.getElementById("menu");
var close = document.getElementById("close");

// Add event listener to handle clicks on menu and close buttons
menu.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

// Function to toggle between menu and close buttons
function toggleMenu() {
  // Toggle the "hidden" class for both buttons
  menu.classList.toggle("hidden");
  close.classList.toggle("hidden");
}

      



document.addEventListener('DOMContentLoaded', function() {
    var pic = document.getElementById('pic');
    pic.classList.remove('hidden');
  
    // Trigger the transition by adding the visible class with a slight delay
    setTimeout(function() {
      pic.classList.add('visible');
    }, 100);
  });

  // mobile nav
//   var menu = document.getElementById("menu");
// var close = document.getElementById("close");
// var navCard = document.getElementById("nav-card");
// var mobileNav = document.getElementById("mobile-nav");

// menu.addEventListener("click", function() {
//   navCard.classList.add("bg-white");
//   mobileNav.classList.remove("hidden");
// });

// close.addEventListener("click", function() {
//   navCard.classList.remove("bg-white");
//   mobileNav.classList.add("hidden");
// });
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var navCard = document.getElementById("nav-card");
var mobileNav = document.getElementById("mobile-nav");

// menu.addEventListener("click", function() {
//   navCard.classList.add("bg-white");
//   mobileNav.classList.remove("hidden");
// });

// close.addEventListener("click", function() {
//   navCard.classList.remove("bg-white");
//   mobileNav.classList.add("hidden");
// });


menu.addEventListener("click", function() {
  navCard.style.backgroundColor = "white";
  mobileNav.classList.remove("hidden");
});

close.addEventListener("click", function() {
  navCard.style.backgroundColor = "";
  mobileNav.classList.add("hidden");
});


// lottie

    // Initialize Lottie animation
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-container'), // Element ID
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'https://assets6.lottiefiles.com/packages/lf20_zm32u2oh.json' // Path to your JSON file
        
    });
    var animation;

    // Add hover event listeners
    var container = document.getElementById('lottie-container');
    container.addEventListener('mouseenter', function() {
        animation.play();
    });
    container.addEventListener('mouseleave', function() {
        animation.stop();
    });

// second animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-container1'), // Element ID
  
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets5.lottiefiles.com/packages/lf20_j9u1jwjx.json' // Path to your JSON file
  
});
animation.setSpeed(0.5);


// third
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-container2'), // Element ID
  
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets5.lottiefiles.com/packages/lf20_GpkgC3heHj.json' // Path to your JSON file
  
});
animation.setSpeed(0.5);


// fourth
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-container3'), // Element ID
  
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets7.lottiefiles.com/packages/lf20_qpelrvgh.json' // Path to your JSON file
  
});
animation.setSpeed(0.5);



// fifth
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-container4'), // Element ID
  
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets2.lottiefiles.com/packages/lf20_T8czce1moY.json' // Path to your JSON file
  
});
animation.setSpeed(0.5);




// scroll effect
