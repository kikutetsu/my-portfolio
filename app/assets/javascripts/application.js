document.addEventListener("DOMContentLoaded", function(){
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

}, false);
