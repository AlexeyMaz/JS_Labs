document.querySelector('#fio').addEventListener('input', function (event) {
    const fioInput = event.target;
    const fioRegex = /^(?!Левин Валентин)[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+)?$/;
    const fioValue = event.target.value.trim();
    const fioErr = document.querySelector('#FioErr');

    if (fioRegex.test(fioValue)) {
        fioInput.style.borderColor = '#ccc';
        fioErr.style.display = "none";
        fioInput.classList.remove('error');
    } else if (fioValue === '') {
        fioInput.style.borderColor = 'red';
        fioErr.innerHTML = 'Введите ФИО'
        emailInput.classList.add('error');
    } else {
        fioInput.style.borderColor = 'red';
        fioErr.style.display = "block";
        fioErr.innerHTML = 'Некорректное ФИО'
        fioInput.classList.add('error');
    }
});

document.querySelector('#email2').addEventListener('input', function (event) {
    const emailInput = event.target;
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MailErr = document.querySelector('#MailErr');

    if (emailRegex.test(emailValue)) {
        emailInput.style.borderColor = '#ccc';
        MailErr.style.display = "none";
        emailInput.classList.remove('error');
    } else if (emailValue === '') {
        emailInput.style.borderColor = 'red';
        MailErr.innerHTML = 'Введите адрес эл. почты'
        emailInput.classList.add('error');
    } else {
        emailInput.style.borderColor = 'red';
        MailErr.style.display = "block";
        MailErr.innerHTML = 'Некорректный формат почты'
        emailInput.classList.add('error');
    }
});

document.querySelector('#password2').addEventListener('input', function (event) {
    const passwordInput = event.target;
    const passwordValue = passwordInput.value;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const PassErr = document.querySelector('#PassErr');

    if (passwordRegex.test(passwordValue)) {
        passwordInput.style.borderColor = '#ccc';
        PassErr.style.display = "none";
        passwordInput.classList.remove('error');
    } else if (passwordValue === '') {
        passwordInput.style.borderColor = 'red';
        PassErr.innerHTML = 'Введите пароль'
        passwordInput.classList.add('error');
    } else {
        passwordInput.style.borderColor = 'red';
        PassErr.style.display = "block";
        PassErr.innerHTML = 'Некорректный формат пароля. Пароль должен состоять хотя бы из 8 символов и хотя бы одной цифры.'
        passwordInput.classList.add('error');
    }
});

document.querySelector('#password3').addEventListener('input', function (event) {
    const passwordConfirmInput = event.target;
    const passwordConfirmValue = passwordConfirmInput.value;
    const passwordValue = document.querySelector('#password2').value;
    const ConfPassErr = document.querySelector('#ConfPassErr');

    if (passwordConfirmValue === passwordValue) {
        passwordConfirmInput.style.borderColor = '#ccc';
        ConfPassErr.style.display = "none";
        passwordConfirmInput.classList.remove('error');
    } else if (passwordConfirmValue === '') {
        passwordConfirmInput.style.borderColor = 'red';
        ConfPassErr.innerHTML = 'Подтвердите пароль'
        passwordConfirmInput.classList.add('error');
    } else {
        passwordConfirmInput.style.borderColor = 'red';
        ConfPassErr.style.display = "block";
        ConfPassErr.innerHTML = 'Пароли не совпадают'
        passwordConfirmInput.classList.add('error');
    }
});

document.querySelector('#phone').addEventListener('input', function (event) {
    const phoneInput = event.target;
    const phoneValue = phoneInput.value;
    const phoneRegex = /^(\+7)?\s?(\(\d{3}\)|\d{3})\s?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}$/;
    const PhoneErr = document.querySelector('#PhoneErr');

    if (phoneRegex.test(phoneValue)) {
        phoneInput.style.borderColor = '#ccc';
        PhoneErr.style.display = "none";
        phoneInput.classList.remove('error');
    } else if (phoneValue === '') {
        phoneInput.style.borderColor = 'red';
        PhoneErr.innerHTML = 'Введите номер телефона'
        phoneInput.classList.add('error');
    } else {
        phoneInput.style.borderColor = 'red';
        PhoneErr.style.display = "block";
        PhoneErr.innerHTML = 'Некорректный формат номера'
        phoneInput.classList.add('error');
    }
});

const birthdayInput = document.getElementById('birthday');
birthdayInput.addEventListener('change', function (event) {
    const birthdayValue = new Date(event.target.value);
    const minDate = new Date('1950-01-01');
    const maxDate = new Date('2005-01-01');
    const birthErr = document.querySelector('#birthErr');

    if (birthdayValue < minDate || birthdayValue > maxDate) {
        birthdayInput.style.borderColor = 'red';
        birthErr.style.display = "block";
    } else {
        birthErr.style.display = "none";
        birthdayInput.style.borderColor = '#ccc';
    }
});



const fioInput = document.querySelector('#fio');
const emailInput = document.querySelector('#email2');
const passwordInput = document.querySelector('#password2');
const passwordConfirmInput = document.querySelector('#password3');
const phoneInput = document.querySelector('#phone');

const languageCheckboxes = document.querySelectorAll('input[type="checkbox"][name="languages"]');
const languagesTitle = document.querySelector('.check');

const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');
const genderTitle = document.querySelector('.check_gen');

const FioErr = document.querySelector('#FioErr');
const MailErr = document.querySelector('#MailErr');
const PassErr = document.querySelector('#PassErr');
const ConfPassErr = document.querySelector('#ConfPassErr');
const PhoneErr = document.querySelector('#PhoneErr');
const birthErr = document.querySelector('#birthErr');

document.querySelector('#task9-form').addEventListener('submit', function (event) {

    if (fioInput.value === '') {
        fioInput.style.borderColor = 'red';
        FioErr.style.display = "block";
        FioErr.innerHTML = 'Введите ФИО'
        fioInput.classList.add('error');
        event.preventDefault();
    }

    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red';
        MailErr.style.display = "block";
        MailErr.innerHTML = 'Введите адрес эл. почты'
        emailInput.classList.add('error');
        event.preventDefault();
    }

    if (passwordInput.value === '') {
        passwordInput.style.borderColor = 'red';
        PassErr.style.display = "block";
        PassErr.innerHTML = 'Введите пароль'
        passwordInput.classList.add('error');
        event.preventDefault();
    }

    if (passwordConfirmInput.value === '') {
        passwordConfirmInput.style.borderColor = 'red';
        ConfPassErr.style.display = "block";
        ConfPassErr.innerHTML = 'Подтвердите пароль'
        passwordConfirmInput.classList.add('error');
        event.preventDefault();
    }

    if (phoneInput.value === '') {
        phoneInput.style.borderColor = 'red';
        PhoneErr.style.display = "block";
        PhoneErr.innerHTML = 'Введите номер телефона'
        phoneInput.classList.add('error');
        event.preventDefault();
    }

    let isLanguageSelected = false;
    for (const checkbox of languageCheckboxes) {
        if (checkbox.checked) {
            isLanguageSelected = true;
            break;
        }
    }

    if (isLanguageSelected) {
        languagesTitle.style.color = 'white';
        languagesTitle.classList.remove('error');
    } else {
        languagesTitle.style.color = 'red';
        languagesTitle.classList.add('error');
        event.preventDefault();
    }

    let isGenderSelected = false;
    for (const radio of genderRadios) {
        if (radio.checked) {
            isGenderSelected = true;
            break;
        }
    }

    if (isGenderSelected) {
        genderTitle.style.color = 'white';
        genderTitle.classList.remove('error');
    } else {
        genderTitle.style.color = 'red';
        genderTitle.classList.add('error');
        event.preventDefault();
    }
});

function showOtherInput() {
    const select = document.getElementById("professions");
    const otherInput = document.getElementById("other-input");
    if (select.value === "other") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

const clearBtn2 = document.querySelector('#clear-button');
clearBtn2.addEventListener('click', function () {

    fioInput.style.borderColor = '#ccc';
    emailInput.style.borderColor = '#ccc';
    passwordInput.style.borderColor = '#ccc';
    passwordConfirmInput.style.borderColor = '#ccc';
    phoneInput.style.borderColor = '#ccc';
    birthdayInput.style.borderColor = '#ccc';

    birthErr.style.display = 'none';
    PhoneErr.style.display = 'none';
    ConfPassErr.style.display = 'none';
    PassErr.style.display = 'none';
    MailErr.style.display = 'none';
    FioErr.style.display = 'none';

    languagesTitle.style.color = 'white';
    genderTitle.style.color = 'white';
});

const btn = document.getElementById("btn_9");
const div = document.getElementsByClassName("task9")[0];
btn.addEventListener("click", () => {
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});