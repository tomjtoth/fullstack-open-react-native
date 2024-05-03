import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';

const sx = StyleSheet.create({
  textInput: { borderColor: 'black', borderRadius: 5, padding: 15, borderWidth: 1 }
})

const Form = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passConf: ''
    },
    onSubmit,
    validationSchema: yup.object().shape({
      username: yup.string().required('Username is required')
        .min(5).max(30),
      password: yup.string().required('Password is required')
        .min(5).max(50),
      passConf: yup.string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirmation is required'),
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

    <TextInput
      placeholder="confirm password"
      placeholderTextColor="lightgray"
      value={formik.values.passConf}
      onChangeText={formik.handleChange('passConf')}
      style={sx.textInput}
      secureTextEntry
    />

    {formik.touched.passConf && formik.errors.passConf && (
      <Text style={{ color: 'red' }}>{formik.errors.passConf}</Text>
    )}

    <Pressable onPress={(e) =>

      !formik.errors.username &&
      !formik.errors.password &&
      !formik.errors.passConf &&

      formik.handleSubmit(e)

    }>
      <Text color="white" bgColor="blue" button centered style={{
        padding: 15, flexGrow: 0
      }}>
        Sign Up
      </Text>
    </Pressable>

  </View >
}

export default Form;
