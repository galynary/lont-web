
const form = document.getElementById("internetForm");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const tariff = document.getElementById("tariff").value;

  if (validateForm(name, address, phone, tariff)) {
    // Если все поля заполнены, продолжаем отправку данных
    const data = {
      name: name,
      address: address,
      phone: phone,
      tariff: tariff
    };

    const url = "http://localhost:2000"; // Замените на реальный URL

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        // Если данные успешно отправлены на сервер, отправляем письмо на электронную почту владельца компании
        sendEmailToOwner(data);
        alert("Заявка успешно отправлена!");
        // Можно также перенаправить пользователя на страницу "спасибо" или что-то подобное
      } else {
        alert("Произошла ошибка при отправке заявки.");
      }
    })
    .catch(error => {
      console.error("Ошибка отправки заявки:", error);
      alert("Произошла ошибка при отправке заявки.");
    });
  }
}

function validateForm(name, address, phone, tariff) {
  if (!name) {
    alert("Заполните поле 'Имя'");
    return false;
  }
  if (!address) {
    alert("Заполните поле 'Адрес'");
    return false;
  }
  if (!phone) {
    alert("Заполните поле 'Телефон'");
    return false;
  }
  if (!tariff) {
    alert("Заполните поле 'Тариф'");
    return false;
  }
  return true; // Все поля заполнены
}