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
    var profileBox = document.getElementById('profile-box');

    if (!profileTitle) return;
    var addText1 = () => {
      var span = document.createElement('span');
      span.textContent = 'k';
      profileTitle.appendChild(span);
    }
    var addText2 = () => {
      var span = document.createElement('span');
      span.textContent = 'i';
      profileTitle.appendChild(span);
    }
    var addText3 = () => {
      var span = document.createElement('span');
      span.textContent = 'k';
      profileTitle.appendChild(span);
    }
    var addText4 = () => {
      var span = document.createElement('span');
      span.textContent = 'u';
      profileTitle.appendChild(span);
    }
    var addText5 = () => {
      var span = document.createElement('span');
      span.textContent = 'c';
      profileTitle.appendChild(span);
    }
    var addText6 = () => {
      var span = document.createElement('span');
      span.textContent = 'h';
      profileTitle.appendChild(span);
    }
    var addText7 = () => {
      var span = document.createElement('span');
      span.textContent = 'i';
      profileTitle.appendChild(span);
    }
    var removeText1 = () => {
      profileTitle.innerHTML = "菊地";
    }
    var addText8 = () => {
      var span = document.createElement('span');
      span.textContent = 't';
      profileTitle.appendChild(span);
    }
    var addText9 = () => {
      var span = document.createElement('span');
      span.textContent = 'e';
      profileTitle.appendChild(span);
    }
    var addText10 = () => {
      var span = document.createElement('span');
      span.textContent = 't';
      profileTitle.appendChild(span);
    }
    var addText11 = () => {
      var span = document.createElement('span');
      span.textContent = 's';
      profileTitle.appendChild(span);
    }
    var addText12 = () => {
      var span = document.createElement('span');
      span.textContent = 'u';
      profileTitle.appendChild(span);
    }
    var addText13 = () => {
      var span = document.createElement('span');
      span.textContent = 'r';
      profileTitle.appendChild(span);
    }
    var addText14 = () => {
      var span = document.createElement('span');
      span.textContent = 'o';
      profileTitle.appendChild(span);
    }
    var addText14_2 = () => {
      var span = document.createElement('span');
      span.textContent = 'u';
      profileTitle.appendChild(span);
    }
    var removeText2 = () => {
      profileTitle.innerHTML = "菊地哲郎";
    }
    var addText15 = () => {
      var span = document.createElement('span');
      span.textContent = 'd';
      profileTitle.appendChild(span);
    }
    var addText16 = () => {
      var span = document.createElement('span');
      span.textContent = 'e';
      profileTitle.appendChild(span);
    }
    var addText17 = () => {
      var span = document.createElement('span');
      span.textContent = 'h';
      profileTitle.appendChild(span);
    }
    var addText18 = () => {
      var span = document.createElement('span');
      span.textContent = 'u';
      profileTitle.appendChild(span);
    }
    var addText19 = () => {
      var span = document.createElement('span');
      span.textContent = 'd';
      profileTitle.appendChild(span);
    }
    var addText20 = () => {
      var span = document.createElement('span');
      span.textContent = 'e';
      profileTitle.appendChild(span);
    }
    var addText21 = () => {
      var span = document.createElement('span');
      span.textContent = 's';
      profileTitle.appendChild(span);
    }
    var addText22 = () => {
      var span = document.createElement('span');
      span.textContent = 'u';
      profileTitle.appendChild(span);
    }
    var addText23 = () => {
      var span = document.createElement('span');
      span.textContent = '。';
      profileTitle.appendChild(span);
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
      profileTitle.innerHTML = "菊地哲郎です。";
    }
    var removeText8 = () => {
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
    setTimeout(addText14_2, 5000);
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
    setTimeout(removeText7, 8400);
    setTimeout(() => {profileTitle.classList.add('is-focus')}, 9000);
    setTimeout(removeText8, 11000);
    setTimeout(() => {profileTitle.classList.remove('is-focus')}, 11000);
    setTimeout(() => {profileTitle.classList.add('is-active')}, 11200);
    setTimeout(() => {profileBox.classList.add('is-active')}, 12700);
  }

  topAnimation();

}, false);
