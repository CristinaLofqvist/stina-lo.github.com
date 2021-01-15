var open = 0;
function toggleOpen(burgerId, elementId, displayValue) {
    var htmlElement = document.getElementById(elementId);
    var burgerBun = document.getElementById(burgerId).children;
    if (open !== 0) {
        for (let i = 0; i < burgerBun.length; i++) {
            if (i == 0) {
                burgerBun[i].style.transform = "rotate(0)";
            } else if (i == 1) {
                burgerBun[i].style.opacity = "1";
                burgerBun[i].style.transform = "translateX(0)"
            } else {
                burgerBun[i].style.transform = "rotate(0)";
            }
        }
        htmlElement.style.transform = "translateX(-100%)";
        open = 0;
    } else {

        for (let i = 0; i < burgerBun.length; i++) {
            if (i == 0) {
                burgerBun[i].style.transform = "rotate(45deg)";
            } else if (i == 1) {
                burgerBun[i].style.opacity = "0";
                burgerBun[i].style.transform = "translateX(20px)"
            } else {
                burgerBun[i].style.transform = "rotate(-45deg)";
            }
        }
        htmlElement.style.transform = "translateX(0)";
        open = 1;
    }
}

/*target html element logo with jquery, display a smaller image when smaller window*/ 

function resize() {
    if ($(window).width() < 799) {
        $(".logotype img").attr("src","./Assets/smallerLogo.png");
    } else {
        $(".logotype img").attr("src","./Assets/logo.png");
    }
}

/*function resize(){
    if ($(window).width() > 768) { 
      $(".logotype img").attr('src', './Assets/logo.png');

  } else {
    $(".logotype img").attr('src', './Assets/SmallerLogo.png');
  }
}*/
resize();
$(window).on('resize', resize);
