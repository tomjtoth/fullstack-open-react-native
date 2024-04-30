import { useNavigate } from 'react-router-native'
import { useApolloClient, useMutation } from '@apollo/client';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { LOGIN } from '../graphql/mutations';


const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(LOGIN);
  const navi = useNavigate();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        username,
        password
      }
    })

    authStorage.setAccessToken(data.authenticate.accessToken);

    client.resetStore();

    navi('/');

    return data;
  };

  return [signIn, result];
};

export default useSignIn
