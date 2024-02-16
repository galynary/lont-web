const path = require('path');

module.exports = {
  entry: './src/index.js', // Вхідний файл
  output: {
    filename: 'bundle.js', // Вихідний файл
    path: path.resolve(__dirname, 'dist') // Шлях до вихідної директорії
  }
};