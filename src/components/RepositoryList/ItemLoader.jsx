import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'

import { GET_REPO } from '../../graphql/queries';
import RepositoryItem from './Item';
import ReviewItem from '../Review/Item';
import ItemSeparator from '../ItemSeparator';

const ItemLoader = () => {

  const [repo, setRepo] = useState(null);
  const { repoId } = useParams()
  const qry = useQuery(GET_REPO, {
    variables: { id: repoId },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (qry.data) {
      if (qry.data.repository === null) return;

      setRepo(qry.data.repository)
    }
  }, [qry.data])

  return repo

    ? <FlatList
      data={repo.reviews.edges.map(e => e.node)}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repo} showButton />}
    />

    : null
}

export default ItemLoader;
