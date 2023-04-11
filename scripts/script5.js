(function () {
    const btn = document.getElementById('btn_5');
    const div = document.getElementsByClassName('task4_5')[1];
    const btn_add = document.getElementsByClassName('task5_buttons')[0];
    const btn_rmv = document.getElementsByClassName('task5_buttons')[1];


    btn_add.addEventListener("click", (event) => {
        const color = prompt('Введите цвет нового блока');

        if (color === '') {
            alert('Вы не ввели цвет!')
        } else if (color == null) {

        } else {
            const new_div = document.createElement('div');
            new_div.style.backgroundColor = color;
            new_div.classList.add('circle')
            btn_add.previousSibling.after(new_div)
        }
    });


    const circles = document.getElementsByClassName("circle");
    let isRmvBtnClicked = false;

    function handleClick(event) {
        for (var i = 0; i < circles.length; i++) {
            circles[i].addEventListener("click", handleClick);
        }
        if (event.target === btn_rmv && isRmvBtnClicked) {
            alert('Выберите блок для удаления');
        } else if (event.target === btn_rmv) {
            for (i = 0; i < circles.length; i++) {
                circles[i].style.cursor = 'pointer';
            }
            isRmvBtnClicked = true;
        } else {
            if (isRmvBtnClicked) {
                event.target.remove();
                isRmvBtnClicked = false;
                for (i = 0; i < circles.length; i++) {
                    circles[i].style.cursor = 'unset';
                }
            }
        }
    }

    btn_rmv.addEventListener("click", handleClick);
    btn.addEventListener("click", (event) => {
        if (div.style.display === "none") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
}());