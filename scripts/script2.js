(function () {
    const btn = document.getElementById("btn_2")
    let tbl = document.getElementById("calendar")

    function Calendar(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst !== 0) {
            for (var i = 1; i < DNfirst; i++)
                calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++)
                calendar += '<td>';
        }
        // определим сегодня
        for (var i = 1; i <= Dlast; i++) {
            if (i === new Date().getDate() && D.getFullYear() === new Date().getFullYear() && D.getMonth() === new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                calendar += '<td>' + i;
            }

            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() === 0) {
                calendar += '<tr>';
            }
        }

        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();

        // переключатель минус месяц
        document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
            Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year,
                parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
        }
        // переключатель плюс месяц
        document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
            Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year,
                parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
        }
    }

    btn.addEventListener("click", (event) => {
        Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

        if (tbl.style.display === "none") {
            tbl.style.display = "block";
        } else {
            tbl.style.display = "none";
        }
    });
}());