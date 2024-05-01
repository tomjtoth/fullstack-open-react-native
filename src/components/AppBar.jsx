import { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link, } from 'react-router-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client'
import { GET_ME } from '../graphql/queries';

import AuthStorageContext from '../contexts/AuthStorageContext';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-evenly',
    flexGrow: 1

  },
});

const AppBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const client = useApolloClient();

  const authStorage = useContext(AuthStorageContext);

  const qry = useQuery(GET_ME);

  useEffect(() => {
    if (qry.data) {
      if (qry.data.me === null) {
        setLoggedIn(false);
        return;
      }

      setLoggedIn(true);
    }
  }, [qry.data])

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  }

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>

      <Link to="/" >
        <Text fontSize="subheading" fontWeight="bold" color="white">
          Repositories
        </Text>
      </Link>

      {!loggedIn

        ? <Link to="/login">
          <Text fontSize="subheading" fontWeight="bold" color="white">
            Sign In
          </Text>
        </Link>

        : <Pressable onPress={handleLogout}>
          <Text fontSize="subheading" fontWeight="bold" color="white">
            Sign Out
          </Text>
        </Pressable>

      }
    </ScrollView>
  )

};

export default AppBar;
