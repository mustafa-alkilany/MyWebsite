function clickmypleas() {

    var button = document.getElementById("phonenavbar");
    var backdrop = document.getElementById("backdrop");
    var blog = document.getElementById("main-list-a__phone-blog");
    var backdropv2 = document.querySelector(".backdrop2")


    button.style.position = "fixed";
    if (button.style.display === "flex") {
        button.style.display = "none";
        backdrop.style.display = "none";
        backdropv2.style.display = "none";
        
    }

    else {
        button.style.display = "flex";
    
        backdrop.style.display = "block";
        backdropv2.style.display = "block";
    }
    backdrop.addEventListener("click", function(){
        button.style.display = "none";
        backdrop.style.display = "none";
    })
    blog.addEventListener("click", function(){
        button.style.display = "none";
        backdrop.style.display = "none";
    })
}
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }

  loop();

  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });

  // function __maina__() {
   
  // };