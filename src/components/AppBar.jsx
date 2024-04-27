import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text fontSize="subheading" fontWeight="bold" color="light">
        Repositories
      </Text>
    </Pressable>

  </View >;
};

export default AppBar;
