(function () {
    const btn = document.getElementById("btn_6");
    let square = document.getElementById('square');
    const div = document.getElementsByClassName('task6')[0]

    let is_1st_click = true

    const initial_position = {
        top: btn.offsetTop + btn.offsetHeight + 20,
        left: btn.offsetLeft
    };


    btn.addEventListener('click', () => {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
            is_1st_click = false
        }
    });

    document.addEventListener('click', (event) => {
        if (div.style.display === "block" && !is_1st_click) {
            square.style.top = event.clientY - square.offsetHeight / 2 + 'px';
            square.style.left = event.clientX - square.offsetWidth / 2 + 'px';
        }
        if (div.style.display === "block")
            is_1st_click = false
        else {
            square.style.top = initial_position.top + 'px';
            square.style.left = initial_position.left + 'px';
            is_1st_click = true
        }
    });
}());