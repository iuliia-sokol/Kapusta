import { Container, ContentWrapper } from './Register.styled';

import { AuthForm } from 'components/AuthForm/AuthForm';
import { AnimatedCabbagesBg } from 'components/AnimatedBg/AnimatedBg';
import { AnimatedBottomCabbages } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom';
import { AuthPageLogo } from 'components/AuthPageLogo/AuthPageLogo';

const RegisterPage = () => {
  return (
    <Container>
      <AnimatedCabbagesBg />
      <ContentWrapper>
        <AuthPageLogo />

        <AuthForm
          formTitle="register"
          btnText="Register"
          navLinkText="Log in"
          navLinkAdress="/"
          hintText="You can log in using an email and password, after registering:"
        />
      </ContentWrapper>
      <AnimatedBottomCabbages />
    </Container>
  );
};

export default RegisterPage;
