import { format } from "date-fns";
import { View } from "react-native"
import Text from "../Text"
import Row from '../Row'
import Col from '../Col'

const ReviewItem = ({ review: { repo = null, text, rating, createdAt, user: { username } } }) => {
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
        <Text fontWeight="bold">{repo ? repo : username}</Text>
        <Text color="textSecondary">{format(new Date(createdAt), "d.M.yyyy")}</Text>
        <Text>{text}</Text>
      </Col>
    </Row>
  </View >

}

export default ReviewItem
