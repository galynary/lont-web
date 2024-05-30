const nodemailer = require('nodemailer');

// Функція для відправлення листа
async function sendEmail(name, address, phone, tariff) {
  // Налаштовуємо відправника листа
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com', // Ваша адреса електронної пошти
      pass: 'your_password', // Ваш пароль
    },
  });

  // Налаштовуємо отримувача, тему і тіло листа
  let mailOptions = {
    from: 'your_email@gmail.com', // Ваша адреса електронної пошти
    to: 'recipient_email@example.com', // Адреса отримувача
    subject: 'Заявка на підключення інтернету',
    text: `Ім'я: ${name}\nАдреса: ${address}\nТелефон: ${phone}\nТариф: ${tariff}`,
  };

  // Відправляємо лист
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email: ', error);
  }
}

// Функція для валідації форми
function validateForm(name, address, phone, tariff) {
  if (!name.trim()) {
    alert("Заполните поле 'Имя'");
    return false;
  }
  if (!address.trim()) {
    alert("Заполните поле 'Адрес'");
    return false;
  }
  if (!phone.trim()) {
    alert("Заполните поле 'Телефон'");
    return false;
  }
  if (!tariff.trim()) {
    alert("Заполните поле 'Тариф'");
    return false;
  }
  // Проверка номера телефона с использованием регулярного выражения
  /*const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert('Введите корректный номер телефона');
    return false;
  }*/
  // Якщо валідація успішна, відправляємо лист
  sendEmail(name, address, phone, tariff);
  return true;
}
