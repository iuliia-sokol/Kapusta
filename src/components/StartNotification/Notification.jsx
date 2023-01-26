import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/lang/langSelectors';
import {
  NotificationContainer,
  StyledWindow,
  Triangle,
  NotificationText,
  NotificationSubText,
} from './Notification.styled';

export function Notification({ money = false }) {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const lang = useSelector(getLang).lang;

  useEffect(() => {
    if (!money) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => setOpacity(1), 0);
        setTimeout(() => setOpacity(0), 9400);
        setTimeout(() => setShow(false), 10000);
      }, 1000);
    }
  }, [money]);

  return (
    <>
      {show && (
        <NotificationContainer onClick={() => setShow(false)}>
          <StyledWindow style={{ opacity }}>
            <Triangle />
            {lang === 'en' ? (
              <NotificationText>
                Hello! To get started, enter the current balance of your
                account!
              </NotificationText>
            ) : (
              <NotificationText>
                Привіт! Щоб розпочати, введіть початковий баланс вашого рахунку!
              </NotificationText>
            )}
            {lang === 'en' ? (
              <NotificationSubText>
                You can't spend money until you have it &#9787;
              </NotificationSubText>
            ) : (
              <NotificationSubText>
                Не можна витрачати гроші, поки у вас їх немає &#9787;
              </NotificationSubText>
            )}
          </StyledWindow>
        </NotificationContainer>
      )}
    </>
  );
}
