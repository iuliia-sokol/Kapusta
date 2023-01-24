import styled from 'styled-components';

export const MainContainer = styled.div`
  box-sizing: border-box;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: center;
    background-color: ${p => p.theme.colors.PrimaryWhite};
    border-bottom-left-radius: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    min-width: 1034px;
    height: 44px;
    margin-bottom: 0;
  }
`;

export const InputForm = styled.form`
  display: ${p => (p.isShown ? 'flex' : 'none')};
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 280px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    row-gap: 34px;
    column-gap: 34px;
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    display: inline-flex;
    flex-wrap: nowrap;
    column-gap: 32px;
    min-width: 1034px;
  }
`;

export const InputGroupWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    height: 44px;
    width: 478px;
    border: 2px solid ${p => p.theme.colors.BtnBorderGray};
    border-radius: 16px 16px 16px 0;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: nowrap;
    width: 578px;
    height: 44px;
    border-radius: 16px 16px 16px 0;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 44px;
  background-color: ${p => p.theme.colors.PrimaryGray};
  border: 2px solid ${p => p.theme.colors.PrimaryWhite};
  font-family: inherit;
  font-size: 12px;
  outline: none;

  /* &:focus {
    border: 1px solid ${p => p.theme.colors.PrimaryOrange};
    background-color: ${p => p.theme.colors.PrimaryWhite};
  } */

  ::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${p => p.theme.colors.PaleGray};
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    border: none;
    background-color: ${p => p.theme.colors.PrimaryWhite};
  }
`;

export const SelectWrapper = styled.div`
  @media screen and (min-width: 768px) {
    border-left: 2px solid ${p => p.theme.colors.PrimaryGray};
    border-right: 2px solid ${p => p.theme.colors.PrimaryGray};
  }
`;

export const InputProduct = styled(Input)`
  width: 280px;
  font-family: inherit;
  font-size: 12px;
  padding-left: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  &::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${p => p.theme.colors.TextGray};
  }

  &:focus {
    border: 1px solid ${p => p.theme.colors.PrimaryOrange};
    background-color: ${p => p.theme.colors.PrimaryWhite};
  }

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    width: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    border-top-left-radius: 16px;
    /* border-top-right-radius: 16px; */
  }
`;

export const SelectAmountWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  width: 280px;
  justify-content: center;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 0;
    margin: 12px 0;
  }
`;
export const InputAmountWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InputAmount = styled(Input)`
  width: 100%;
  text-align: right;
  padding-right: 42px;
  background-color: ${p => p.theme.colors.PrimaryWhite};
  border-radius: 0 0 16px 0;

  &::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${p => p.theme.colors.TextGray};
  }

  &:focus {
    border: 1px solid ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    flex-shrink: 0;
    width: 110px;
    border-radius: 0 16px 16px 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: inline-flex;
  column-gap: 16px;
`;
