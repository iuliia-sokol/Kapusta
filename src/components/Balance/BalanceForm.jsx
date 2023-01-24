import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { Notification } from 'components/Notification/Notification';
import { Popup } from 'components/Popup/Popup';
import { fetchUserBalance } from 'redux/transactions/transactionsOps';
import { notifySettings } from '../../utils/notifySettings';
import Notiflix from 'notiflix';
import { formattingSum } from 'utils/formattingSum';

export function BalanceFrom() {
  const dispatch = useDispatch();

  const savedBalance = useSelector(selectBalance);

  const [popup, setPopup] = useState({
    isShow: false,
    title: '',
    action: null,
  });

  const [balance, setBalance] = useState(savedBalance ?? 0);

  useEffect(() => {
    setBalance(savedBalance);
  }, [savedBalance]);

  const handleChange = ({ target: { value } }) => {
    // const num = value.toFixed(2);
    setBalance(value);
    console.log(formattingSum(+value));
  };

  const onClick = () => {
    if (Number(balance) === 0) {
      setBalance(prev => savedBalance);
      Notiflix.Notify.warning(`Balance cannot be "0"!`, notifySettings);
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
      <BalanceForm>
        <Text htmlFor="balance">Balance:</Text>
        <BaseContainer>
          <CurrentBalanceContainer>
            <CurrentBalance>
              <Input
                type="number"
                id="balance"
                name="balance"
                min="00.00"
                max="10000000.00"
                step="0.1"
                required
                placeholder="00.00"
                // defaultValue={formating(value)}
                // onBlur={onBlur}
                onChange={handleChange}
                value={balance || savedBalance || ''}
              />
              uah
            </CurrentBalance>
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
          >
            Confirm
          </StyledBtn>
        </BaseContainer>
      </BalanceForm>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
