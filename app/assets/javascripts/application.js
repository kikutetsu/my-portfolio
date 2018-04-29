document.addEventListener("DOMContentLoaded", function(){

  // mobile_menu
  var menuToggle = function(){
    var menu = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-open");
    var isActive = false;
    menuBtn.addEventListener("click", changeActive, false);

    function changeActive(){
      if (isActive) {
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active');
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

  // fixed-login-form
  // var loginForm = document.getElementById("login-form");
  // if (loginForm) {
  //   window.addEventListener("resize", function(){
  //     console.log(window.innerHeight);
  //     console.log(loginForm.clientHeight);
  //   }, false);
  // }
}, false);
