import { useNavigate } from 'react-router-native'
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './Item';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'gray'
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {

  const navigate = useNavigate()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      }
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;
