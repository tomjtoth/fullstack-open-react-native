import { useMutation } from '@apollo/client'

import Form from './Form';
import useSignIn from '../../hooks/useSignIn';
import { CREATE_USER } from '../../graphql/mutations';


const SignUp = () => {
  const [register] = useMutation(CREATE_USER)
  const [signIn] = useSignIn();

  const onSubmit = ({ username, password }) => {
    register({ variables: { username, password } }).then(() =>
      signIn({ username, password })
        .then(({ data }) => console.log(data))
        .catch(e => console.error(e))
    )

  }

  return <Form onSubmit={onSubmit} />
};

export default SignUp;
