import { Text, View } from "react-native"

const RepositoryItem = ({ item: {
  fullName, description, langugage, reviewCount, ratingAverage, stargazersCount, forksCount
} }) => <View>
    <Text>Full name: {fullName}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {langugage}</Text>
    <Text>Stars: {stargazersCount}</Text>
    <Text>Forks: {forksCount}</Text>
    <Text>Reviews: {reviewCount}</Text>
    <Text>Ratings: {ratingAverage}</Text>
  </View>


export default RepositoryItem
