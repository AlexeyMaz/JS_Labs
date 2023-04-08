(function () {
    const btn = document.getElementById("btn_1");
    let div = document.getElementsByClassName("date")[0]

    function showDateTime() {
        let now = new Date();

        let year = now.getFullYear();
        let month = (now.getMonth() + 1).toString().padStart(2, '0');
        let day = now.getDate().toString().padStart(2, '0');
        let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let day_week = daysOfWeek[now.getDay()];
        let status_date = `${day_week}, ${day}-${month}-${year}`;

        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        let status_time = `${hours}:${minutes}:${seconds}`;

        const p = div.querySelector("p");
        p.textContent = status_date + ' ' + status_time;
        setInterval(showDateTime, 1000);
    }

    btn.addEventListener("click", (event) => {
        showDateTime()

        if (div.style.display === "none") {
            div.style.display = "table";
        } else {
            div.style.display = "none";
        }
    });
}());