import React from 'react';
import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { selectBalance } from 'redux/transactions/transactionsSelectors';
import {
  Text,
  CurrentBalance,
  StyledBtn,
  CurrentBalanceContainer,
  BalanceForm,
  Input,
  BaseContainer,
  BalanceFormNotification,
} from './Balance.styled';
import { Notification } from 'components/StartNotification/Notification';
import { Popup } from 'components/Popup/Popup';
import { fetchUserBalance } from 'redux/transactions/transactionsOps';
import { notifySettings } from '../../utils/notifySettings';
import { getLang } from 'redux/lang/langSelectors';

export function BalanceFrom({ btnDisplay = false, page = 'wallet' }) {
  const dispatch = useDispatch();

  const savedBalance = Number(useSelector(selectBalance)).toFixed(2);

  const [popup, setPopup] = useState({
    isShow: false,
    title: '',
    action: null,
  });

  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [balance, setBalance] = useState(savedBalance ?? 0);
  const [minusBalance, setMinusBalance] = useState(false);
  const lang = useSelector(getLang).lang;

  useEffect(() => {
    if (!+balance) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => setOpacity(1), 0);
        setTimeout(() => setOpacity(0), 9400);
        setTimeout(() => setShow(false), 10000);
      }, 1000);
    }
  }, [balance, lang]);

  useEffect(() => {
    setBalance(savedBalance);
    setMinusBalance(false);
    if (savedBalance < 0) {
      setMinusBalance(true);
    }
  }, [savedBalance]);

  const handleChange = ({ target: { value } }) => {
    if (+value === 0) {
      lang === 'en'
        ? Notiflix.Notify.warning(`Balance cannot be "0"!`, notifySettings)
        : Notiflix.Notify.warning(
            `Баланс не повинен бути рівним "0"!`,
            notifySettings
          );
    }
    setBalance(Number(value).toFixed(2));
  };

  const onClick = () => {
    if (+balance === 0) {
      setBalance(prev => savedBalance);
      return;
    }
    if (+balance === +savedBalance) {
      lang === 'en'
        ? Notiflix.Notify.warning(
            `New balance cannot be the same!`,
            notifySettings
          )
        : Notiflix.Notify.warning(
            `Оновлений баланс має відрізнятись від попереднього!`,
            notifySettings
          );
      return;
    }

    setPopup({
      isShow: true,
      title: lang === 'en' ? 'Are you sure?' : 'Ви впевнені?',
      action: () => dispatch(fetchUserBalance({ balance })),
    });
    document.querySelector('#modal').classList.add('js-action');
  };

  return (
    <>
      <BalanceForm page={page}>
        {lang === 'en' ? (
          <Text htmlFor="balance">Balance:</Text>
        ) : (
          <Text htmlFor="balance">Баланс:</Text>
        )}
        <BaseContainer>
          <CurrentBalanceContainer page={page} btnDisplay={btnDisplay}>
            <Input
              type="number"
              id="balance"
              name="balance"
              min="00.00"
              max="10000000.00"
              step="0.1"
              required
              placeholder="00.00"
              onChange={handleChange}
              value={balance || savedBalance || ''}
              minusBalance={minusBalance}
            />
            {lang === 'en' ? (
              <CurrentBalance>uah</CurrentBalance>
            ) : (
              <CurrentBalance>грн</CurrentBalance>
            )}
            {show && (
              <BalanceFormNotification>
                <Notification setShow={setShow} lang={lang} opacity={opacity} />
              </BalanceFormNotification>
            )}
          </CurrentBalanceContainer>
          <StyledBtn
            type="button"
            disabled={!balance || balance === '0'}
            onClick={onClick}
            btnDisplay={btnDisplay}
          >
            {lang === 'en' ? <p>Confirm</p> : <p>Підтвердити</p>}
          </StyledBtn>
        </BaseContainer>
      </BalanceForm>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}

export const MemoizedBalanceForm = React.memo(BalanceFrom);
