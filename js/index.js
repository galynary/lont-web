document
  .getElementById('internetForm')
  .addEventListener('submit', function (event) {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let tariff = document.getElementById('tariff').value;

    if (!validateForm(name, address, phone, tariff)) {
      event.preventDefault();
    }
  });

function validateForm(name, address, phone, tariff) {
  const namePattern = /^[a-zA-Zа-яА-Я]{3,10}$/;
  const phonePattern = /^\d{10}$/;

  if (!namePattern.test(name.trim())) {
    alert("Введіть коректне ім'я (символів має бути в межах від 3 до 10)");
    return false;
  }
  if (!address.trim()) {
    alert("Заповніть поле 'Адреса'");
    return false;
  }

  if (!phonePattern.test(phone.trim())) {
    alert('Введіть коректний номер телефону');
    return false;
  }

  if (!tariff.trim()) {
    alert("Заповніть поле 'Тариф'");
    return false;
  }

  return true;
}
