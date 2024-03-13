function submitForm() {
    // Отримання даних з форми
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const tariff = document.getElementById("tariff").value;

    // Перевірка форми перед відправкою
    if (!validateForm(name, address, phone, tariff)) {
        return;
    }

    // Створення об'єкта з даними для відправки
    const data = {
        name,
        phone,
        address,
        tariff
    };

    // Відправка даних на сервер за допомогою API Fetch
    fetch('url_вашого_серверу', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Відповідь від серверу:', data);
        // Тут ви можете обробити відповідь від серверу
        alert('Ваша заявка успішно відправлена!');
    })
    .catch(error => {
        console.error('Помилка відправки даних на сервер:', error);
        alert('Виникла помилка під час відправки заявки. Будь ласка, спробуйте пізніше.');
    });
}

function validateForm(name, address, phone, tariff) {
    if (!name.trim()) {
        alert("Заповніть поле 'Ім'я'");
        return false;
    }
    if (!address.trim()) {
        alert("Заповніть поле 'Адреса'");
        return false;
    }
    if (!phone.trim()) {
        alert("Заповніть поле 'Телефон'");
        return false;
    }
    if (!tariff.trim()) {
        alert("Виберіть тариф");
        return false;
    }
    // Перевірка номера телефону за допомогою регулярного виразу
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Введіть коректний номер телефону (11 цифр)");
        return false;
    }
    return true;
}