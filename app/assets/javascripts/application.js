import Dropzone from 'dropzone/dist/dropzone';

Dropzone.autoDiscover = false;
Dropzone.options.dropzoneArea = {
  paramName: 'image',
  clickable: false,
  init: function () {
      this.on("addedfile", function (file) {
        console.log("アップロード中です");
      });
      this.on("success", function (file) {
        console.log("アップロード成功しました。");
      });
      this.on("error", function (file) {
        console.log("アップロードに失敗しました。");
      });
      this.on("complete", function (file) {
      });
  }
};

document.addEventListener("DOMContentLoaded", function(){

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
  scrollFadeIn('fadein', 'scrollin', 40);
  window.addEventListener('scroll', () => {
    scrollFadeIn('fadein', 'scrollin', 40);
  }, false)

  if (document.getElementById('dropzone-area')) {
    var url = location.href
    var uploadUrl = url.replace('edit', 'upload');
    var myDropzone = new Dropzone("textarea#dropzone-area", { url: uploadUrl});
    // other code here
  }

  // テキストエリア
  var field = document.getElementById('dropzone-area');

  field.addEventListener('keypress', function(e) {
    var index = field.selectionStart;
    console.log(index);
    return false;
  });

}, false);
