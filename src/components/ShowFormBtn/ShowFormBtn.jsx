import { ShowFormBtn } from './ShowFormBtn.styled';

import { TbKeyboardShow, TbKeyboardHide } from 'react-icons/tb';

export const ShowFormButton = ({ showForm, onClick }) => {
  return (
    <ShowFormBtn type="button" aria-label="Open modal" onClick={onClick}>
      {showForm ? <TbKeyboardHide size={16} /> : <TbKeyboardShow size={16} />}
    </ShowFormBtn>
  );
};
