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

  //scrollFadein
  var scrollFadeIn = function(target, scrollin, duration){
    var fadeInElements = document.getElementsByClassName(target);
    [].forEach.call(fadeInElements, (element,index) => {
      var rect = element.getBoundingClientRect();
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var elementOffsetTop = rect.top + scrollTop;
      var params = duration;
      if (elementOffsetTop <= scrollTop + window.innerHeight - params && !element.classList.contains('scrollin')) {
        element.classList.add(scrollin);
      }
    });
  }

  // fadein
  scrollFadeIn('fadein', 'scrollin', 80);
  window.addEventListener('scroll', () => {
    scrollFadeIn('fadein', 'scrollin', 80);
  }, false)

  //top_animation
  var topAnimation = function(){
    var profileTitle = document.getElementById('profile-title');
    if (!profileTitle) return;
    var addText1 = () => {
      var text = document.createTextNode('k');
      profileTitle.appendChild(text);
    }
    var addText2 = () => {
      var text = document.createTextNode('i');
      profileTitle.appendChild(text);
    }
    var addText3 = () => {
      var text = document.createTextNode('k');
      profileTitle.appendChild(text);
    }
    var addText4 = () => {
      var text = document.createTextNode('u');
      profileTitle.appendChild(text);
    }
    var addText5 = () => {
      var text = document.createTextNode('c');
      profileTitle.appendChild(text);
    }
    var addText6 = () => {
      var text = document.createTextNode('h');
      profileTitle.appendChild(text);
    }
    var addText7 = () => {
      var text = document.createTextNode('i');
      profileTitle.appendChild(text);
    }
    var removeText1 = () => {
      profileTitle.innerHTML = "菊地";
    }
    var addText8 = () => {
      var text = document.createTextNode('t');
      profileTitle.appendChild(text);
    }
    var addText9 = () => {
      var text = document.createTextNode('e');
      profileTitle.appendChild(text);
    }
    var addText10 = () => {
      var text = document.createTextNode('t');
      profileTitle.appendChild(text);
    }
    var addText11 = () => {
      var text = document.createTextNode('s');
      profileTitle.appendChild(text);
    }
    var addText12 = () => {
      var text = document.createTextNode('u');
      profileTitle.appendChild(text);
    }
    var addText13 = () => {
      var text = document.createTextNode('r');
      profileTitle.appendChild(text);
    }
    var addText14 = () => {
      var text = document.createTextNode('o');
      profileTitle.appendChild(text);
    }
    var removeText2 = () => {
      profileTitle.innerHTML = "菊地哲郎";
    }
    var addText15 = () => {
      var text = document.createTextNode('d');
      profileTitle.appendChild(text);
    }
    var addText16 = () => {
      var text = document.createTextNode('e');
      profileTitle.appendChild(text);
    }
    var addText17 = () => {
      var text = document.createTextNode('h');
      profileTitle.appendChild(text);
    }
    var addText18 = () => {
      var text = document.createTextNode('u');
      profileTitle.appendChild(text);
    }
    var addText19 = () => {
      var text = document.createTextNode('d');
      profileTitle.appendChild(text);
    }
    var addText20 = () => {
      var text = document.createTextNode('e');
      profileTitle.appendChild(text);
    }
    var addText21 = () => {
      var text = document.createTextNode('s');
      profileTitle.appendChild(text);
    }
    var addText22 = () => {
      var text = document.createTextNode('u');
      profileTitle.appendChild(text);
    }
    var addText23 = () => {
      var text = document.createTextNode('。');
      profileTitle.appendChild(text);
    }
    var removeText3 = () => {
      profileTitle.innerHTML = "菊地哲郎でふ";
    }
    var removeText4 = () => {
      profileTitle.innerHTML = "菊地哲郎で";
    }
    var removeText5 = () => {
      profileTitle.innerHTML = "菊地哲郎";
    }
    var removeText6 = () => {
      profileTitle.innerHTML = "菊地哲郎です";
    }
    var removeText7 = () => {
      profileTitle.innerHTML = "";
    }
    setTimeout(addText1, 1000);
    setTimeout(addText2, 1200);
    setTimeout(addText3, 1700);
    setTimeout(addText4, 1900);
    setTimeout(addText5, 2400);
    setTimeout(addText6, 2600);
    setTimeout(addText7, 2800);
    setTimeout(removeText1, 3000);
    setTimeout(addText8, 3100);
    setTimeout(addText9, 3300);
    setTimeout(addText10, 3800);
    setTimeout(addText11, 4000);
    setTimeout(addText12, 4200);
    setTimeout(addText13, 4700);
    setTimeout(addText14, 4900);
    setTimeout(removeText2, 5100);
    setTimeout(addText15, 5300);
    setTimeout(addText16, 5500);
    setTimeout(addText17, 5700);
    setTimeout(addText18, 5900);
    setTimeout(removeText3, 6100);
    setTimeout(removeText4, 6400);
    setTimeout(removeText5, 6600);
    setTimeout(addText19, 6900);
    setTimeout(addText20, 7100);
    setTimeout(addText21, 7300);
    setTimeout(addText22, 7500);
    setTimeout(removeText6, 7700);
    setTimeout(addText23, 8200);
    setTimeout(() => {profileTitle.classList.add('focus')}, 9000);
    setTimeout(removeText7, 9500);
    setTimeout(() => {profileTitle.classList.remove('focus')}, 9500);
  }

  topAnimation();

}, false);
