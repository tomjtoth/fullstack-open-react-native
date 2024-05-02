import { useEffect, useState } from 'react';
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'

import RepositoryItem from './Item';
import { GET_REPO } from '../../graphql/queries';

const ItemLoader = () => {

  const [repo, setRepo] = useState(null);
  const { repoId } = useParams()
  const qry = useQuery(GET_REPO, { variables: { id: repoId } });

  useEffect(() => {
    if (qry.data) {
      if (qry.data.repository === null) return;

      setRepo(qry.data.repository)
    }
  }, [qry.data])

  return repo
    ? <RepositoryItem item={repo} showButton />
    : null
}

export default ItemLoader;
