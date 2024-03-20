document.getElementById("internetForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let tariff = document.getElementById("tariff").value;
    
    if (!validateForm(name, address, phone, tariff)) {
        event.preventDefault();
    }
});

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
        alert("Заповніть поле 'Тариф'");
        return false;
    }
    // Перевірка номера телефона за допомогою регулярного виразу
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Введіть коректний номер телефону");
        return false;
    }
    return true;
}