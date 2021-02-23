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
 function showDays() {
    var htmlElement = document.getElementById("days");
    htmlElement.innerHTML = '<div><input type="checkbox" id="monday-check" name="monday"><label for="monday">Måndag</label></div>' +
    '<div><input type="checkbox" id="tuesday-check" name="tuesday"><label for="tuesday">Tisdag</label></div>' +
    '<div><input type="checkbox" id="wensday-check" name="wensday"><label for="wensday">Onsdag</label></div>' +
    '<div><input type="checkbox" id="thursday-check" name="thursday"><label for="thursday">Torsdag</label></div>' +
    '<div><input type="checkbox" id="friday-check" name="friday"><label for="friday">Fredag</label></div>' +
    '<div><input type="checkbox" id="saturday-check" name="saturday"><label for="saturday">Lördag</label></div>' +
    '<div><input type="checkbox" id="sunday-check" name="sunday"><label for="sunday">Söndag</label></div>'
    htmlElement.style.height = "500px";
 }

 function hideDays() {
    var htmlElement = document.getElementById("days");
    htmlElement.innerHTML=""
    htmlElement.style.height = "0px";
}