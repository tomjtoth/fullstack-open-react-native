import { Linking, Pressable, View, Image, StyleSheet } from "react-native"
import Text from "../Text";
import Row from "./Row";
import Col from "./Col";

const num = (x) => x <= 1000 ? x : `${(x / 1000).toFixed(1)}k`;

const sx = StyleSheet.create({
  flexbox: {
    display: 'flex',
    rowGap: 15,
    padding: 15
  }
});

const RepositoryItem = ({ showButton = false, item: {
  ownerAvatarUrl,
  fullName,
  description,
  language,
  reviewCount,
  ratingAverage,
  stargazersCount,
  forksCount,
  url
} }) => {

  return <View style={sx.flexbox} testID="repositoryItem">
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
    {showButton &&
      <Pressable onPress={() => Linking.openURL(url)}>
        <Text bgColor="blue" color="white" button centered fontSize="subheading">
          open in GitHub
        </Text>
      </Pressable>
    }
  </View>
}


export default RepositoryItem
