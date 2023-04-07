function add_zero(value) {
    if (value.toString().length === 1) return "0" + value.toString();
    else return value.toString();
}

const button_first = document.getElementById("btn_1");
button_first.addEventListener("click", (event) => {
    let now = new Date()
    let day = now.getDay()
    let year = now.getFullYear()
    let month = now.getMonth()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let month_ar = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let weak_ar = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const div = document.getElementsByClassName("date")[0]
    const p = div.querySelector("p");
    p.textContent = "Время: " + add_zero(hours) + "-" + add_zero(minutes) + "-" + add_zero(seconds) + ampm + '\n' + "Дата: " + year + " " + day + " " + month_ar[month] + ", " + weak_ar[day - 1]

    if (div.style.display === "none") {
        div.style.display = "table";
    } else {
        div.style.display = "none";
    }
});