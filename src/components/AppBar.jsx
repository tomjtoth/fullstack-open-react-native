import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
    gap: 5,
    flexGrow: 1
  },
});

const AppBar = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>

        <Link to="/" style={{ flexGrow: 1 }}>
          <Text fontSize="subheading" fontWeight="bold" color="light">
            Repositories
          </Text>
        </Link>

        <Link to="/login" style={{ flexGrow: 1 }}>
          <Text fontSize="subheading" fontWeight="bold" color="light">
            Login
          </Text>
        </Link>

      </View >
    </ScrollView>
  )

};

export default AppBar;
