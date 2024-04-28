import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';

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

  return <View style={{ display: 'flex', gap: 5 }}>
    <TextInput
      placeholder="username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={{ borderColor: 'black', borderRadius: 5, width: 400 }}
    />
    <TextInput
      placeholder="password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      style={{ borderColor: 'black', borderRadius: 5, width: 400 }}
      secureTextEntry
    />
    <Pressable onPress={formik.handleSubmit}>
      <Text color="light" style={{ backgroundColor: 'blue', borderRadius: 5, padding: 5, flexGrow: 0 }}>
        Login
      </Text>
    </Pressable>
  </View >
};

export default SignIn;
