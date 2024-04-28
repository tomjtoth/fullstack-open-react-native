import { View, StyleSheet } from 'react-native';
import { Link, } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
    gap: 5
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Link to="/">
      <Text fontSize="subheading" fontWeight="bold" color="light">
        Repositories
      </Text>
    </Link>

    <Link to="/login">
      <Text fontSize="subheading" fontWeight="bold" color="light">
        Login
      </Text>
    </Link>
  </View >
};

export default AppBar;
