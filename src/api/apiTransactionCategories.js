import { instance } from 'redux/auth/authOperations';

export const API_TRANSACTION = {
  expense: {
    apiTransactionsCategoriesEndpoint: 'transaction/expense-categories',
    apiAddTransactionEndpoint: 'transaction/expense',
    apiCategories: {
      Продукты: 'Products',
      Алкоголь: 'Alcohol',
      Развлечения: 'Entertainment',
      Здоровье: 'Health',
      Транспорт: 'Transport',
      'Всё для дома': 'Housekeeping',
      Техника: 'Electronics',
      'Коммуналка и связь': 'Communications',
      'Спорт и хобби': 'Activities',
      Образование: 'Education',
      Прочее: 'Other',
    },
    apiCategoriesUK: {
      Продукты: 'Продукти',
      Алкоголь: 'Алкоголь',
      Развлечения: 'Розваги',
      Здоровье: 'Здоров`я',
      Транспорт: 'Транспорт',
      'Всё для дома': 'Господарство',
      Техника: 'Техніка',
      'Коммуналка и связь': 'Комуналка/зв`язок',
      'Спорт и хобби': 'Спорт/хобі',
      Образование: 'Освіта',
      Прочее: 'Інше',
    },
  },
  income: {
    apiTransactionsCategoriesEndpoint: 'transaction/income-categories',
    apiAddTransactionEndpoint: 'transaction/income',
    apiCategories: {
      'З/П': 'Salary',
      'Доп. доход': 'Additional income',
    },
    apiCategoriesUK: {
      'З/П': 'Зарплата',
      'Доп. доход': 'Додатковий дохід',
    },
  },
};

export const getTransactionCategories = async type => {
  try {
    const { data } = await instance.get(
      API_TRANSACTION[type].apiTransactionsCategoriesEndpoint
    );
    return data;
  } catch (error) {
    throw error;
  }
};
