import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';

const sx = StyleSheet.create({
  textInput: { borderColor: 'black', borderRadius: 5, padding: 15, borderWidth: 1 }
})

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      const { username, password } = values;

      console.log(`"${username}:${password}" logged in`)
    },
  });

  return <View style={{ display: 'flex', gap: 5, margin: 15 }}>
    <TextInput
      placeholder="username"
      placeholderTextColor="lightgray"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={sx.textInput}
    />
    <TextInput
      placeholder="password"
      placeholderTextColor="lightgray"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      style={sx.textInput}
      secureTextEntry
    />
    <Pressable onPress={formik.handleSubmit}>
      <Text color="light" style={{
        textAlign: 'center', backgroundColor: 'blue', borderRadius: 5, padding: 15, flexGrow: 0
      }}>
        Sign In
      </Text>
    </Pressable>
  </View >
};

export default SignIn;
