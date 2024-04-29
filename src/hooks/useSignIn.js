import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';

export default () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        username,
        password
      }
    })
  };

  return [signIn, result];
};