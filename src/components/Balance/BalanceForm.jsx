import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
  PortalContainer,
  AbsoluteContainer,
} from './Balance.styled';
import { Notification } from 'components/StartNotification/Notification';
import { Popup } from 'components/Popup/Popup';
import { fetchUserBalance } from 'redux/transactions/transactionsOps';
import { notifySettings } from '../../utils/notifySettings';

export function BalanceFrom({ btnDisplay = false, page = 'wallet' }) {
  const dispatch = useDispatch();

  const savedBalance = Number(useSelector(selectBalance)).toFixed(2);

  const [popup, setPopup] = useState({
    isShow: false,
    title: '',
    action: null,
  });

  const [balance, setBalance] = useState(savedBalance ?? 0);
  const [minusBalance, setMinusBalance] = useState(false);

  useEffect(() => {
    setBalance(savedBalance);
    setMinusBalance(false);
    if (savedBalance < 0) {
      setMinusBalance(true);
      Notiflix.Notify.info(
        `&#9757; Oops, you have negative balance`,
        notifySettings
      );
    }
  }, [savedBalance]);

  const handleChange = ({ target: { value } }) => {
    if (+value === 0) {
      Notiflix.Notify.warning(`Balance cannot be "0"!`, notifySettings);
    }
    setBalance(Number(value).toFixed(2));
  };

  const onClick = () => {
    if (+balance === 0) {
      setBalance(prev => savedBalance);
      return;
    }
    if (+balance === +savedBalance) {
      Notiflix.Notify.warning(
        `New balance cannot be the same!`,
        notifySettings
      );
      return;
    }

    setPopup({
      isShow: true,
      title: 'Are you sure?',
      action: () => dispatch(fetchUserBalance({ balance })),
    });
    document.querySelector('#modal').classList.add('js-action');
  };

  return (
    <>
      <BalanceForm page={page}>
        <Text htmlFor="balance">Balance:</Text>
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
            <CurrentBalance>uah</CurrentBalance>
            {createPortal(
              <AbsoluteContainer>
                <BalanceForm>
                  <PortalContainer>
                    <Notification money={balance} />
                  </PortalContainer>
                </BalanceForm>
              </AbsoluteContainer>,
              document.querySelector('#balance')
            )}
          </CurrentBalanceContainer>
          <StyledBtn
            type="button"
            disabled={!balance || balance === '0'}
            onClick={onClick}
            btnDisplay={btnDisplay}
          >
            Confirm
          </StyledBtn>
        </BaseContainer>
      </BalanceForm>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
