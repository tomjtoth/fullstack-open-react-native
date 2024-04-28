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

  return <View>
    <TextInput
      placeholder="username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
    <TextInput
      placeholder="password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
    />
    <Pressable onPress={formik.handleSubmit}>
      <Text>Login</Text>
    </Pressable>
  </View >
};

export default SignIn;
