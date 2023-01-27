import {
  NotificationContainer,
  StyledWindow,
  Triangle,
  NotificationText,
  NotificationSubText,
} from './Notification.styled';

export function Notification({ setShow, lang, opacity }) {
  return (
    <NotificationContainer onClick={() => setShow(false)}>
      <StyledWindow style={{ opacity }}>
        <Triangle />
        {lang === 'en' ? (
          <NotificationText>
            Hello! To get started, enter the current balance of your account!
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
  );
}
