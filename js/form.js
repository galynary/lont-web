function submitForm() {
    // Отримання даних з форми
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");

    // Створення об'єкта з даними для відправки
    const data = {
        name: name.value,
        phone: phone.value,
        address: address.value,
    };
   console.log(data);

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
    })
    .catch(error => {
        console.error('Помилка відправки даних на сервер:', error);
    });
}