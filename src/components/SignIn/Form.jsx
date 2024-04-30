import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';

const sx = StyleSheet.create({
  textInput: { borderColor: 'black', borderRadius: 5, padding: 15, borderWidth: 1 }
})

const SignInForm = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit,
    validationSchema: yup.object().shape({
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required'),
    })
  });

  return <View style={{ display: 'flex', gap: 5, margin: 15 }} >

    <TextInput
      placeholder="username"
      placeholderTextColor="lightgray"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={sx.textInput}
    />

    {formik.touched.username && formik.errors.username && (
      <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
    )}

    <TextInput
      placeholder="password"
      placeholderTextColor="lightgray"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      style={sx.textInput}
      secureTextEntry
    />

    {formik.touched.password && formik.errors.password && (
      <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
    )}

    <Pressable onPress={(e) =>
      !formik.errors.password &&
      !formik.errors.username &&
      formik.handleSubmit(e)}>
      <Text color="light" style={{
        textAlign: 'center', backgroundColor: 'blue', borderRadius: 5, padding: 15, flexGrow: 0
      }}>
        Sign In
      </Text>
    </Pressable>

  </View >
}

export default SignInForm;
