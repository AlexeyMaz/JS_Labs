(function () {
    const div = document.getElementById("task3");
    const btn = document.getElementById("btn_3");

    const root = document.documentElement;
    const all_divs = root.querySelectorAll("div");
    let p = document.querySelectorAll("p")[1];

    p.textContent = "Количество блоков: " + all_divs.length

    btn.addEventListener("click", (event) => {
        if (div.style.display === "none") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
}());