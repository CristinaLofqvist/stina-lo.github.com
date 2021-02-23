var open = 0;
function toggleOpen(burgerId, elementId, onResize) {
    var htmlElement = document.getElementById(elementId);
    var burger = document.getElementById(burgerId)
    if (!htmlElement || !burger)
        return
    var burgerBun = burger.children;

    if (open) {
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
        htmlElement.style.opacity = "0"
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
        htmlElement.style.opacity = "1";
        open = 1;
    }
}

/*target html element logo with jquery, display a smaller image when smaller window*/

function resize() {
    if ($(window).width() < 799) {
        $(".logotype img").attr("src", "./Assets/smallerLogo.png");
        toggleOpen("burgerMenu", "mainNav", true)
        $(".mainNav").attr("style", "opacity: 0;")
    } else {
        $(".logotype img").attr("src", "./Assets/logo.png");
        $(".mainNav").attr("style", "opacity: 1;")
    }
}
