function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

const btn = document.getElementById("btn_2")
btn.addEventListener("click", (event) => {
    const div = document.getElementsByClassName("calendar")[0]
    let now = new Date();
    let current_day = now.getUTCDate()
    let weak_ar = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let month_n_ar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    now.setDate(1);
    let year = now.getFullYear();
    let month = now.getMonth();
    let day_of_week = now.getDay();
    let current_day_number = daysInMonth(month, year)
    let prev_day_number = daysInMonth(month - 1, year)
    if (day_of_week === 0) day_of_week = 7;
    let month_ar = []
    for (let i = prev_day_number - day_of_week + 2; i <= prev_day_number; i++) month_ar.push(i);
    for (let i = 1; i <= current_day_number; i++) month_ar.push(i);
    let i = 1;
    while (month_ar.length < 35) {
        month_ar.push(i++);
    }
    let num = day_of_week - 2 + current_day
    let table = '<table class="second_table">'
    table += '<caption class="text" style="text-shadow: 4px 4px 6px;">' + month_n_ar[month] + '</caption>'
    for (let i = 0; i < 7; i++) table += '<th class="text">' + weak_ar[i] + '</th>'
    for (let i = 1; i <= month_ar.length; i++) {

        if (i % 7 === 1) table += ('<tr class="text">');
        if (i - 1 <= day_of_week - 2 || i - 1 >= day_of_week - 1 + current_day_number) {
            if (i < day_of_week - 1 + current_day) table += ('<td class="not_cur_month before_d">' + month_ar[i - 1] + '<\/td>');
            else table += ('<td class="not_cur_month">' + month_ar[i - 1] + '<\/td>');
        } else {
            if (i - 1 === num) table += ('<td class="text current_day">' + month_ar[i - 1] + '<\/td>');
            else {
                if (i < day_of_week - 1 + current_day) table += ('<td class="before_d">' + month_ar[i - 1] + '<\/td>');
                else table += ('<td>' + month_ar[i - 1] + '<\/td>');
            }
        }
        if (i % 7 === 0) table += ('<\/tr>');
    }
    table += ('<\/table>');
    div.innerHTML = table
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});