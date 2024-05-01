import { View, Image, StyleSheet } from "react-native"
import Text from "../Text";

const num = (x) => x <= 1000 ? x : `${(x / 1000).toFixed(1)}k`;

const sx = StyleSheet.create({
  flexbox: {
    display: 'flex',
    rowGap: 15,
    padding: 15
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    flexGrow: 1,
    gap: 10
  },
  col: {
    flexGrow: 1,
    gap: 5,
  }
});

const Row = ({ style, children }) => (
  <View style={[sx.row, style]}>{children}</View>
)

const Col = ({ style, children }) => (
  <View style={[sx.col, style]}>{children}</View>
)

const RepositoryItem = ({ item: {
  ownerAvatarUrl,
  fullName,
  description,
  language,
  reviewCount,
  ratingAverage,
  stargazersCount,
  forksCount,
} }) => <View style={sx.flexbox} testID="repositoryItem">
    <Row>
      <Image style={{ borderRadius: 5, flexGrow: 0, width: 50, height: 50 }} source={{ uri: ownerAvatarUrl }} />
      <Col>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Row style={{ justifyContent: 'flex-start' }}>
          <Text color="white" bgColor="blue" button style={{ flexGrow: 0 }}>{language}</Text>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text centered fontWeight="bold">{num(stargazersCount)}</Text>
        <Text centered color="textSecondary">Stars</Text>
      </Col>
      <Col>
        <Text centered fontWeight="bold">{num(forksCount)}</Text>
        <Text centered color="textSecondary">Forks</Text>
      </Col>
      <Col>
        <Text centered fontWeight="bold">{num(reviewCount)}</Text>
        <Text centered color="textSecondary">Reviews</Text>
      </Col>
      <Col>
        <Text centered fontWeight="bold">{num(ratingAverage)}</Text>
        <Text centered color="textSecondary">Ratings</Text>
      </Col>
    </Row>
  </View>


export default RepositoryItem
