import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'


const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const [repositories, setRepositories] = useState([]);

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword
    }
  });

  useEffect(() => {
    if (data) {
      if (data.repositories === null) return;

      setRepositories(data.repositories.edges.map(edge => edge.node))
    }
  }, [data])


  return { repositories, loading, error, refetch: GET_REPOSITORIES };
};

export default useRepositories;
