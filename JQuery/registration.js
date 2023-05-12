(function () {
    $(document).ready(function () {
            $('#registration-form').submit(function (event) {
                event.preventDefault();

                var name = $('#name').val().trim();
                var email = $('#email').val().trim();
                var password = $('#password').val().trim();
                var confirmPassword = $('#confirm-password').val().trim();
                var gender = $('#gender').val().trim();
                var age = $('#age').val().trim();

                if (name === '' || email === '' || password === '' || confirmPassword === '' || gender === '' || age === '') {
                    alert('Заполните все поля');
                    return;
                }

                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Некорректный email');
                    return;
                }

                if (password !== confirmPassword) {
                    alert('Пароли не совпадают');
                    return;
                }

                var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/;
                if (!passwordRegex.test(password)) {
                    alert('Пароль должен содержать хотя бы одну букву и цифру, длина от 8 символов');
                    return;
                }

                if (isNaN(age)) {
                    alert('Возраст введите');
                    return;
                }

                if (age < 18 || age > 100) {
                    alert('Вам должно быть от 18 до 100');
                    return;
                }
            })
        }
    )
}