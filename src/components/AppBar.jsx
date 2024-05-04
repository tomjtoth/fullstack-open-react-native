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

  const { data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      if (data.me === null) {
        setLoggedIn(false);
        return;
      }

      setLoggedIn(true);
    }
  }, [data])

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

      {loggedIn

        ? <>
          <Link to="/create-review" >
            <Text fontSize="subheading" fontWeight="bold" color="white">
              Create a review
            </Text>
          </Link>

          <Link to="/my-reviews" >
            <Text fontSize="subheading" fontWeight="bold" color="white">
              My reviews
            </Text>
          </Link>

          <Pressable onPress={handleLogout}>
            <Text fontSize="subheading" fontWeight="bold" color="white">
              Sign Out
            </Text>
          </Pressable>
        </>

        : <>
          <Link to="/login">
            <Text fontSize="subheading" fontWeight="bold" color="white">
              Sign In
            </Text>
          </Link>

          <Link to="/register">
            <Text fontSize="subheading" fontWeight="bold" color="white">
              Sign Up
            </Text>
          </Link>
        </>

      }
    </ScrollView>
  )

};

export default AppBar;
