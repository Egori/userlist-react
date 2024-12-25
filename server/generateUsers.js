
const fs = require('fs'); // Модуль для работы с файловой системой

const generateUsers = (count) => {
  const users = [];
  const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "Emily Evans", "George Harris", "Sophia Clark", "Daniel Walker", "Lily Scott"];
  const domains = ["example.com", "test.com", "demo.com", "site.com", "mail.com"];

  for (let i = 1; i <= count; i++) {
    const nameIndex = Math.floor(Math.random() * names.length);
    const domainIndex = Math.floor(Math.random() * domains.length);
    users.push({
      id: i,
      name: names[nameIndex],
      email: `${names[nameIndex].toLowerCase().split(" ").join(".")}@${domains[domainIndex]}`,
    });
  }

  return users;
};

const users = generateUsers(100000); // Генерируем 100000 пользователей

// Оборачиваем сгенерированные данные в объект с ключом "users"
const data = {
  users: users
};

// Сохраняем данные в файл users.json
fs.writeFile('users.json', JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error('Ошибка при сохранении данных в файл:', err);
  } else {
    console.log('Данные успешно сохранены в файл users.json');
  }
});
