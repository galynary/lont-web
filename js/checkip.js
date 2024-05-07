window.onload = function () {
  fetch('/get_ip.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var userIP = data.ip;
      console.log('IP адреса користувача: ' + userIP);

      // Розділити IP-адресу на октети
      var userIPParts = userIP.split('.');

      // Перевірити, чи знаходиться користувач в мережі 100.64.0.0/18
      if (
        userIPParts[0] === '100' &&
        (parseInt(userIPParts[1]) & 0xc0) === 64
      ) {
        // Змінити посилання для мережі 100.64.0.0/10
        document.getElementById('updateLink').href =
          'http://10.10.100.252/billing/userstats';
      } else {
        // Змінити посилання для інших мереж
        document.getElementById('updateLink').href =
          'http://193.34.173.126:8088/billing/userstats';
      }
    })
    .catch(error => {
      console.error('Помилка отримання IP адреси: ', error);
    });
};
