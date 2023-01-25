import { CustomSelectStyled } from './CustomSelect.styled';

export const CustomSelect = ({
  key,
  options,
  placeholder,
  isLoading,
  onChange,
  value,
}) => {
  return (
    <CustomSelectStyled
      classNamePrefix="react-select"
      key={key}
      defaultOptions
      placeholder={placeholder}
      // styles={selectStyles}
      options={options}
      isLoading={isLoading}
      closeMenuOnSelect={true}
      onChange={onChange}
      value={value}
    />
  );
};
