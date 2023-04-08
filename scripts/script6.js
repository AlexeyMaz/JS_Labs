(function () {
    const btn = document.getElementById("btn_6");
    let square = document.getElementById('square');
    let is_1st_click = true

    const initial_position = {
        top: btn.offsetTop + btn.offsetHeight,
        left: btn.offsetLeft
    };


    btn.addEventListener('click', () => {
        if (square.style.display === "none") {
            square.style.display = "block";
        } else {
            square.style.display = "none";
            is_1st_click = false
        }
    });

    document.addEventListener('click', (event) => {
        if (square.style.display === "block" && !is_1st_click) {
            square.style.top = event.clientY - square.offsetHeight / 2 + 'px';
            square.style.left = event.clientX - square.offsetWidth / 2 + 'px';
        }
        if (square.style.display === "block")
            is_1st_click = false
        else {
            square.style.top = initial_position.top + 'px';
            square.style.left = initial_position.left + 'px';
            is_1st_click = true
        }
    });
}());