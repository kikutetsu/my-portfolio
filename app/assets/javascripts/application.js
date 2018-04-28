document.addEventListener("DOMContentLoaded", function(){

  // mobile_menu
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

  // notify_bar
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
}, false);
