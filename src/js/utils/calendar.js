document.addEventListener('DOMContentLoaded', () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  const day = document.querySelector('.calendar-dates');
  const currdate = document.querySelector('.calendar-current-date');
  const prenexIcons = document.querySelectorAll('.calendar-navigation span');

  // Массив названий месяцев
  const months = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  // Функция генерации календаря
  const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay(); // день недели первого числа
    let lastdate = new Date(year, month + 1, 0).getDate(); // последний день месяца (число)
    let dayend = new Date(year, month, lastdate).getDay(); // день недели последнего числа месяца
    let monthlastdate = new Date(year, month, 0).getDate(); // последний день предыдущего месяца

    let lit = '';

    // Заполняем "хвост" предыдущего месяца
    for (let i = dayone; i > 0; i--) {
      lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Заполняем дни текущего месяца
    for (let i = 1; i <= lastdate; i++) {
      // Проверка на "сегодня"
      let isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? 'active'
          : '';
      lit += `<li class="${isToday}">${i}</li>`;
    }

    // "Хвост" следующего месяца, чтобы ровно заполнить недели
    for (let i = dayend; i < 6; i++) {
      lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }

    // Подпись в шапке (месяц и год)
    currdate.innerText = `${months[month]} ${year}`;

    // Выводим сгенерированные дни в календарь
    day.innerHTML = lit;

    // ----------------------------
    // ДОБАВЛЯЕМ ЛОГИКУ КЛИКА ПО ДНЯМ
    // ----------------------------
    const allDates = day.querySelectorAll('li');

    allDates.forEach(li => {
      li.addEventListener('click', () => {
        // Сначала убираем класс "active" у всех элементов
        allDates.forEach(item => item.classList.remove('active'));
        // Добавляем класс "active" к кликнутому элементу
        li.classList.add('active');
      });
    });
  };

  // Генерация при первой загрузке
  manipulate();

  // Обработка кликов на стрелках навигации
  prenexIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Если нажали "предыдущий месяц"
      month = icon.id === 'calendar-prev' ? month - 1 : month + 1;

      // Следим, чтобы не выйти за пределы 0–11
      if (month < 0 || month > 11) {
        // Перескакиваем на новый год
        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear();
        month = date.getMonth();
      } else {
        // Обновляем date только текущим значением
        date = new Date();
      }

      // Перестраиваем календарь
      manipulate();
    });
  });
});
