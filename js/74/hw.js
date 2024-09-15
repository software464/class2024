const joe = document.getElementById("joe");
const trump = document.getElementById("trump");

window.pcstools = function () {
    "use strict";
    let i = 0;



    function click(elem, callback) {
        elem.addEventListener("click", callback);
    }
    function hide(elem) {
        elem.style.display = "none";

    }

    function show(elem) {
        elem.style.display = "block";
    }

    function flash(elem, duration) {
        const colors = ["yellow", "red", "green"];
        function changeColor() {
            if (i === colors.length)
                i = 0;
            elem.style.color = colors[i];
            i++;
        }
        setInterval(changeColor, duration);

    }
    return {
        click,
        hide,
        show,
        flash
    };
}();

function printJoe() {
    console.log("joe was clicked");
}



window.pcstools.click(joe, printJoe);
window.pcstools.hide(joe);
window.pcstools.show(trump);
window.pcstools.flash(trump, 2000);


