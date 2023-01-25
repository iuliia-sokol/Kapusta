import { Container, ContentWrapper } from './Logins.styled';

import { AuthForm } from 'components/AuthForm/AuthForm';
import { AnimatedCabbagesBg } from 'components/AnimatedBg/AnimatedBg';
import { AnimatedBottomCabbages } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom';
import { AuthPageLogo } from 'components/AuthPageLogo/AuthPageLogo';

const LoginPage = () => {
  return (
    <Container>
      <AnimatedCabbagesBg />
      <ContentWrapper>
        <AuthPageLogo />

        <AuthForm
          formTitle="login"
          btnText="Log in"
          navLinkText="Register"
          navLinkAdress="/register"
          hintText="Or log in using an email and password, after registering:"
        />
      </ContentWrapper>
      <AnimatedBottomCabbages />
    </Container>
  );
};

export default LoginPage;
