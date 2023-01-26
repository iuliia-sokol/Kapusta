export const wordTranslator = word => {
  switch (word) {
    case 'Январь':
      return 'January';
    case 'Февраль':
      return 'February';
    case 'Март':
      return 'March';
    case 'Апрель':
      return 'April';
    case 'Май':
      return 'May';
    case 'Июнь':
      return 'June';
    case 'Июль':
      return 'July';
    case 'Август':
      return 'August';
    case 'Сентябрь':
      return 'September';
    case 'Октябрь':
      return 'October';
    case 'Ноябрь':
      return 'November';
    case 'Декабрь':
      return 'December';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technique';
    case 'Коммуналка и связь':
      return 'Communal, communication';
    case 'Спорт и хобби':
      return 'Sports, hobbies';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    default:
      return `Please add ${word} to function`;
  }
};

export const wordTranslatorUK = word => {
  switch (word) {
    case 'Январь':
      return 'Січень';
    case 'Февраль':
      return 'Лютий';
    case 'Март':
      return 'Березень';
    case 'Апрель':
      return 'Квітень';
    case 'Май':
      return 'Травень';
    case 'Июнь':
      return 'Червень';
    case 'Июль':
      return 'Липень';
    case 'Август':
      return 'Серпень';
    case 'Сентябрь':
      return 'Вересень';
    case 'Октябрь':
      return 'Жовтень';
    case 'Ноябрь':
      return 'Листопад';
    case 'Декабрь':
      return 'Грудень';
    case 'З/П':
      return 'Зарплата';
    case 'Доп. доход':
      return 'Додатковий дохід';
    case 'Продукты':
      return 'Продукти';
    case 'Алкоголь':
      return 'Алкоголь';
    case 'Развлечения':
      return 'Розваги';
    case 'Здоровье':
      return 'Здоров`я';
    case 'Транспорт':
      return 'Транспорт';
    case 'Всё для дома':
      return 'Господарство';
    case 'Техника':
      return 'Техніка';
    case 'Коммуналка и связь':
      return 'Комуналка, зв`язок';
    case 'Спорт и хобби':
      return 'Спорт, хобі';
    case 'Образование':
      return 'Освіта';
    case 'Прочее':
      return 'Інше';
    default:
      return `Додайте ${word} до функції`;
  }
};
