(function () {
    function make_hover(obj, opacity_new, mult) {
        if (obj.style.opacity <= 1 && obj.style.opacity >= 0) {
            opacity_new = opacity_new - 0.1 * mult;
            obj.style.opacity = opacity_new;
            if (obj.style.opacity > 1) {
                obj.style.opacity = 1;
            }
            if (obj.style.opacity < 0) {
                obj.style.opacity = 0;
            }
        }
    }

    const isHover = (e) => e.parentElement.querySelector(":hover") === e;
    const btn = document.getElementById("btn_8");
    const div = document.getElementsByClassName("task8")[0];
    const image = document.getElementById("task8_img");

    var hovered_all = false;
    let hov, all_hov, mult = -1;


    document.addEventListener("mousemove", function checkHover() {
        const hovered = isHover(div);
        if (hovered !== checkHover.hovered) {

            if (hovered) {
                clearInterval(all_hov);
                mult = +1;
                hov = setInterval(function () {
                    make_hover(image, image.style.opacity, mult);
                }, 50);
            } else {
                mult = -1;
                clearInterval(hov);
                all_hov = setInterval(function () {
                    make_hover(image, image.style.opacity, mult);
                }, 50);
            }
            checkHover.hovered = hovered;
            hovered_all = hovered;
        }
    });

    btn.addEventListener("click", (event) => {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}());