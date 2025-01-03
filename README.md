# "Список Пользователей" на React

Этот проект представляет собой React-приложение для отображения списков пользователей, полученных с сервера. Включены такие функции, как пагинация, фильтрация по имени пользователя и оптимизация интерфейса для работы с большими объемами данных. Также проект содержит встроенный сервер с тестовыми данными.

Приложение доступно по адресу: 
http://193.43.79.184:3000/

---

## Возможности

1. **Список пользователей с пагинацией и фильтрацией**  
   - Получение данных пользователей с API.  
   - Реализована пагинация для удобной навигации.  
   - Функция фильтрации позволяет искать пользователей по имени.

2. **Оптимизированный список для больших объемов данных**  
   - Используется библиотека `react-window` для виртуализации длинных списков.  
   - Эффективная работа даже с наборами данных размером более 100 000 пользователей.

3. **Встроенный тестовый сервер**  
   - В проект включен простой сервер для предоставления тестовых данных (`./server/server.js`).

---

## Установка и запуск

### 1. Установка зависимостей
Убедитесь, что у вас установлены Node.js и npm. Затем выполните:
```bash
npm install
```

### 2. Запуск сервера
Тестовый сервер находится в файле `./server/server.js`. Чтобы запустить его, выполните команду:
```bash
сd server
npm install
node server.js
```

Сервер будет доступен по адресу [http://localhost:5000](http://localhost:5000).

### 3. Запуск React-приложения
В новом терминале выполните:
```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

---

## Как это работает

- **Пагинация и фильтрация**  
  Приложение запрашивает данные пользователей с сервера. Пользователи могут перемещаться по страницам и использовать строку поиска для фильтрации результатов по имени.

- **Оптимизированный список**  
  Второй список пользователей разработан для работы с большими наборами данных. Он использует `react-window` для рендеринга только видимых строк.

---

## Оптимизация для больших списков

Для работы с наборами данных более 100 000 пользователей:  
1. **Виртуализация**  
   В проекте используется `react-window` для рендеринга только видимых элементов, что снижает нагрузку на DOM и память.  
2. **Ленивая загрузка**  
   Рекомендуется реализовать ленивая подгрузка данных с API, чтобы уменьшить время начальной загрузки.  
3. **Дебаунсинг фильтрации**  
   Для повышения производительности поиска можно использовать задержку (debounce) обработки ввода пользователя, чтобы избежать частых вызовов API или тяжелых операций.

---
