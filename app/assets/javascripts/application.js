document.addEventListener("DOMContentLoaded", function(){

  // mobile_menu
  var menuToggle = function(){
    var header = document.getElementById("header");
    var menuBtn = document.getElementById("menu-open");
    var menuBg1 = document.getElementById("menu-bg1");
    var menuBg2 = document.getElementById("menu-bg2");
    var isActive = false;
    menuBtn.addEventListener("click", changeActive, false);

    function changeActive(){
      if (isActive) {
        header.classList.add('is-deactive');
        menuBtn.classList.remove('is-active');
        menuBg1.classList.remove('is-active');
        menuBg2.classList.remove('is-active');
        header.classList.remove('is-active');
      } else {
        menuBtn.classList.add('is-active');
        menuBg1.classList.add('is-active');
        menuBg2.classList.add('is-active');
        header.classList.add('is-active');
        header.classList.remove('is-deactive');
      }
      isActive = !isActive;
    }
  }

  menuToggle();

  // notify_bar
  var notifyBarSlide = function(){
    var notifyBar = document.getElementById("notify-bar");
    var notifyBarDelay = 2000
    if (notifyBar) {
      notifyBarSlideIn();
      setInterval(notifyBarSlideOut, notifyBarDelay);
    }
    function notifyBarSlideIn() {
      notifyBar.classList.add('notify-slide-in');
    }
    function notifyBarSlideOut() {
      notifyBar.classList.remove('notify-slide-in');
      notifyBar.classList.add('notify-slide-out');
    }
  }

  notifyBarSlide();

  //toTopButton
  var scrollTop = function(){
    var toTopButton = document.getElementById("to-top-btn");
    var duration = 100;
    if(toTopButton) {
      toTopButton.addEventListener("click", function(){
        var currentY = window.pageYOffset;
        var step = duration/currentY > 1 ? 10 : 100;
        var timeStep = duration/currentY * step;
        var intervalID = setInterval(scrollUp, timeStep);
        function scrollUp(){
          currentY = window.pageYOffset;
          if(currentY === 0) {
            clearInterval(intervalID);
          } else {
            scrollBy( 0, -step );
          }
        }
      }, false);
    }
  }

  scrollTop();

  //fadein_element
  var scrollFadeIn = function(){
    var fadeInElements = document.getElementsByClassName("fadein");
    [].forEach.call(fadeInElements, (element,index) => {
      var rect = element.getBoundingClientRect();
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var elementOffsetTop = rect.top + scrollTop;
      var params = 150;
      if (elementOffsetTop <= scrollTop + window.innerHeight - params && !element.classList.contains('scrollin')) {
        element.classList.add('scrollin');
      }
    });
  }
  scrollFadeIn();
  window.addEventListener('scroll', () => {
    scrollFadeIn();
  }, false)
}, false);
