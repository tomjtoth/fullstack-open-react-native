import { View, Pressable, Alert } from "react-native"
import { Link } from 'react-router-native';
import { useMutation } from '@apollo/client'
import { format } from "date-fns";

import Text from "../Text"
import Row from '../Row'
import Col from '../Col'

import { DELETE_REVIEW } from "../../graphql/mutations";

const ReviewItem = ({ review: { refetchReviews, id, repoId, repoName, text, rating, createdAt, user: { username } } }) => {

  const [delReview] = useMutation(DELETE_REVIEW)

  return <View style={{ padding: 5 }}>
    <Row>
      <View style={{
        width: 40,
        height: 40,

        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',

        justifyContent: 'center',
        margin: 50

      }}>
        <Text fontWeight="bold" style={{
          color: 'blue', fontSize: 20, textAlign: 'center'
        }}>{rating}</Text></View>
      <Col>
        <Text fontWeight="bold">{repoName ? repoName : username}</Text>
        <Text color="textSecondary">{format(new Date(createdAt), "d.M.yyyy")}</Text>
        <Text>{text}</Text>
      </Col>
    </Row>

    {repoName && <Row>

      <Link to={`/repositories/${repoId}`}>
        <Text centered bgColor="blue" fontSize="subheading" fontWeight="bold" color="white">
          View repository
        </Text>
      </Link>

      <Text>
        faf
      </Text>

      <Pressable onPress={() => Alert.alert(
        "Deleting review",
        'Are you sure?',
        [
          {
            text: 'Yes', onPress: () => {
              delReview({ variables: { id } })
              refetchReviews()
            }
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ])}>
        <Text centered bgColor="red" fontSize="subheading" fontWeight="bold" color="white">
          Delete review
        </Text>
      </Pressable>

    </Row>}
  </View >

}

export default ReviewItem
