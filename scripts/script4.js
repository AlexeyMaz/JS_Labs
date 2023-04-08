(function () {
    const btn = document.getElementById("btn_4");
    let div = document.getElementsByClassName("task4_5")[0];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let prev_id = 1;

    function randImg() {
        let elem = document.createElement("img");
        elem.src = "../images/icon.png"
        elem.alt = "Human 2.0"

        var id = getRandomInt(4) + 1
        while (prev_id === id) {
            id = getRandomInt(4) + 1
        }

        document.getElementById("div" + prev_id).innerHTML = "";

        document.getElementById("div" + id).appendChild(elem);
        prev_id = id
        setInterval(randImg, 100)
    }

    btn.addEventListener("click", (event) => {
        randImg()

        if (div.style.display === "none") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
}());