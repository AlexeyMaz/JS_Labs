(function () {

    const btn = document.getElementById("btn_7");
    const div = document.getElementsByClassName("task7")[0];
    let end_text = document.getElementById("task7_end");
    end_text.style.visibility = "hidden";
    const itemsList = document.getElementById("task7_list");
    let menu_element = document.querySelector(".candy");
    let tittle_element = menu_element.querySelector(".title");

    tittle_element.onclick = function () {
        itemsList.classList.toggle("hidden");
    };

    document.addEventListener("DOMContentLoaded", function () {


        itemsList.addEventListener("click", function (event) {
            let target = event.target;
            if (target.tagName === "LI") {
                target.classList.add("fading");
                setTimeout(() => {
                    target.remove();
                }, 800);
            }

            if (itemsList.childElementCount === 1) {
                setTimeout(() => {
                    end_text.style.visibility = "visible";
                    end_text.classList.add("fading_out");
                }, 300);
            }
        });
    });


    btn.addEventListener("click", (event) => {
        if (div.style.display === "none") {
            menu_element.display = 'block'
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}());