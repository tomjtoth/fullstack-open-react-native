import { useNavigate } from 'react-router-native'
import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './Item';
import ItemSeparator from './ItemSeparator';

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
