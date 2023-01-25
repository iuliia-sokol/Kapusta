import { ShowFormBtn } from './ShowFormBtn.styled';

import { FaPiggyBank, FaArrowUp } from 'react-icons/fa';

export const ShowFormButton = ({ showForm, onClick }) => {
  return (
    <ShowFormBtn type="button" aria-label="Open modal" onClick={onClick}>
      {showForm ? <FaArrowUp /> : <FaPiggyBank />}
    </ShowFormBtn>
  );
};
