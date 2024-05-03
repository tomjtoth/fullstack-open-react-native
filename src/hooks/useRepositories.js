import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'


const useRepositories = (orderBy, orderDirection) => {
  const [repositories, setRepositories] = useState([]);

  const qry = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection
    }
    // Other options
  });

  useEffect(() => {
    if (qry.data) {
      if (qry.data.repositories === null) return;

      setRepositories(qry.data.repositories.edges.map(edge => edge.node))
    }
  }, [qry.data])


  return { repositories, loading: qry.loading, error: qry.error, refetch: GET_REPOSITORIES };
};

export default useRepositories;
