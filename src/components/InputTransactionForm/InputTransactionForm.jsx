import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import './styles/InputTransactionForm.css';
import { notifySettings } from '../../utils/notifySettings';
import sprite from 'images/icons_sprite.svg';
import { Btn } from 'components/Buttons/Btn';
import { API_TRANSACTION } from '../../api/apiTransactionCategories';
import {
  addTransactionOp,
  fetchCategoriesOp,
} from 'redux/transactions/transactionsOps';
import { DatePickerComponent } from 'components/DatePickerComponent/DatePickerComponent';

import {
  selectisLoadingOptions,
  selectTransactionsOptions,
  selectTransactionsOptionsLength,
} from 'redux/transactions/transactionsSelectors';

import {
  ButtonsWrapper,
  InputAmount,
  InputAmountWrapper,
  InputForm,
  InputGroupWrapper,
  InputProduct,
  MainContainer,
  SelectAmountWrapper,
  SelectWrapper,
} from './styles/InputTransactionForm.styled';
import { ShowFormButton } from 'components/ShowFormBtn/ShowFormBtn';
import { CustomSelect } from 'components/Select/CustomSelect';
import { getLang } from 'redux/lang/langSelectors';

export default function InputTransactionForm({ type }) {
  const lang = useSelector(getLang).lang;

  const TRANSACTION_FORM_DATA = {
    expense: {
      description: lang === 'en' ? 'Product description' : 'Опис товару',
      selectCategoryPlaceholder:
        lang === 'en' ? 'Product category' : 'Категорія товару',
    },
    income: {
      description: lang === 'en' ? 'Income description' : 'Опис прибутку',
      selectCategoryPlaceholder:
        lang === 'en' ? 'Income category' : 'Вид прибутку',
    },
  };

  const today = new Date();
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const transactionsOptions = useSelector(selectTransactionsOptions);

  const transactionsOptionsLength = useSelector(
    selectTransactionsOptionsLength
  );
  const isLoadingOpts = useSelector(selectisLoadingOptions);

  useEffect(() => {
    if (transactionsOptionsLength || isLoadingOpts) return;

    dispatch(fetchCategoriesOp(type));
    // eslint-disable-next-line
  }, [type, lang]);

  const onClearForm = () => {
    setDate(today);
    setFormData(initialFormData);
    setCategory(null);
  };

  const isFormValid = (product, category, sum) => {
    let isValid = true;
    if (!product) {
      lang === 'en'
        ? Notiflix.Notify.warning(
            'You should enter transaction description',
            notifySettings
          )
        : Notiflix.Notify.warning(
            'Необхідно ввести опис транзакції',
            notifySettings
          );

      isValid = false;
    }
    if (!category) {
      lang === 'en'
        ? Notiflix.Notify.warning(
            'You should choose transaction category',
            notifySettings
          )
        : Notiflix.Notify.warning(
            'Необхідно обрати категорію транзакції',
            notifySettings
          );
      isValid = false;
    }
    if (sum === '' || parseFloat(sum) < 0.01) {
      lang === 'en'
        ? Notiflix.Notify.warning(
            'You should enter transaction amount',
            notifySettings
          )
        : Notiflix.Notify.warning(
            'Необхідно ввести суму транзакції',
            notifySettings
          );
      isValid = false;
    }
    return isValid;
  };

  const onButtonModalClick = () => {
    setShowForm(!showForm);
  };

  const onFormSubmit = () => {
    if (!isFormValid(formData.product, category, formData.sum)) return null;
    const transaction = {
      description: formData.product,
      amount: parseFloat(formData.sum),
      date: date.toISOString().split('T')[0],
      category:
        lang === 'en'
          ? Object.keys(API_TRANSACTION[type].apiCategories)[category.value]
          : Object.keys(API_TRANSACTION[type].apiCategoriesUK)[category.value],
    };

    console.log(transaction);
    dispatch(addTransactionOp({ type, transaction }));
    onClearForm();
  };

  const validateSumInput = value => {
    if (value === '') {
      setFormData(oldData => {
        return { ...oldData, sum: '' };
      });
      return null;
    }

    let num = parseFloat(value);

    if (isNaN(num)) num = formData.sum;

    setFormData(oldData => {
      return { ...oldData, sum: num };
    });
  };

  return (
    <MainContainer>
      <ShowFormButton showForm={showForm} onClick={onButtonModalClick} />
      <InputForm isShown={showForm}>
        <DatePickerComponent
          name="date"
          date={date}
          maxDate={today}
          handler={date => setDate(date)}
        />
        <InputGroupWrapper>
          <InputProduct
            type="text"
            value={formData.product}
            name="product"
            placeholder={TRANSACTION_FORM_DATA[type].description}
            onChange={e =>
              setFormData(oldData => {
                return { ...oldData, product: e.target.value };
              })
            }
          />
          <SelectAmountWrapper>
            <SelectWrapper>
              <CustomSelect
                keyName={type}
                value={category}
                isLoading={isLoadingOpts}
                options={transactionsOptions[type] ?? []}
                placeholder={
                  TRANSACTION_FORM_DATA[type].selectCategoryPlaceholder
                }
                onChange={selectedOption => setCategory(selectedOption)}
              />
            </SelectWrapper>
            <InputAmountWrapper>
              <InputAmount
                type="number"
                placeholder="0,00"
                value={formData.sum}
                name="product"
                min="00.00"
                max="10000000.00"
                step="0.1"
                required
                onChange={e => validateSumInput(e.target.value)}
              />
              <svg
                className="input-product-form--calc-svg"
                width="20"
                height="20"
              >
                <use href={sprite + `#calculator`}></use>
              </svg>
            </InputAmountWrapper>
          </SelectAmountWrapper>
        </InputGroupWrapper>
        <ButtonsWrapper>
          <Btn text="INPUT" onClick={onFormSubmit} />
          <Btn text="CLEAR" onClick={onClearForm} />
        </ButtonsWrapper>
      </InputForm>
    </MainContainer>
  );
}
