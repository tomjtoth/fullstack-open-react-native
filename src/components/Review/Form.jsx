import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';

const sx = StyleSheet.create({
  textInput: { borderColor: 'black', borderRadius: 5, padding: 15, borderWidth: 1 }
})

const ReviewForm = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues: {
      owner: '',
      repo: '',
      rating: '',
      review: ''
    },
    onSubmit,
    validationSchema: yup.object().shape({
      owner: yup.string().required('Owner is required'),
      repo: yup.string().required('Repo is required'),
      rating: yup.number().integer().required('Rating is required').min(0).max(100),
      review: yup.string()
    })
  });

  return <View style={{ display: 'flex', gap: 5, margin: 15 }} >

    <TextInput
      placeholder="owner"
      placeholderTextColor="lightgray"
      value={formik.values.owner}
      onChangeText={formik.handleChange('owner')}
      style={sx.textInput}
    />

    {formik.touched.owner && formik.errors.owner && (
      <Text style={{ color: 'red' }}>{formik.errors.owner}</Text>
    )}

    <TextInput
      placeholder="repo"
      placeholderTextColor="lightgray"
      value={formik.values.repo}
      onChangeText={formik.handleChange('repo')}
      style={sx.textInput}
    />

    {formik.touched.repo && formik.errors.repo && (
      <Text style={{ color: 'red' }}>{formik.errors.repo}</Text>
    )}

    <TextInput
      placeholder="rating: 0-100"
      placeholderTextColor="lightgray"
      keyboardType='numeric'
      value={formik.values.rating}
      onChangeText={formik.handleChange('rating')}
      style={sx.textInput}
    />

    {formik.touched.rating && formik.errors.rating && (
      <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
    )}

    <TextInput
      placeholder="review"
      placeholderTextColor="lightgray"
      value={formik.values.review}
      onChangeText={formik.handleChange('review')}
      style={sx.textInput}
      multiline
    />

    <Pressable onPress={(e) =>

      // !formik.errors.owner &&
      // !formik.errors.repo &&
      // !formik.errors.rating &&

      formik.handleSubmit(e)

    }>
      <Text color="white" bgColor="blue" button centered style={{
        padding: 15, flexGrow: 0
      }}>
        Create a review
      </Text>
    </Pressable>

  </View >
}

export default ReviewForm;
