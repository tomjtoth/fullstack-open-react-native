import SignInForm from './Form';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = ({ username, password }) => {
    signIn({ username, password })
      .then(({ data }) => console.log(data))
      .catch(e => console.error(e))
  }

  return <SignInForm onSubmit={onSubmit} />
};

export default SignIn;
