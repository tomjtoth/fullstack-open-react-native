import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'


const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const qry = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  useEffect(() => {
    if (qry.data) {
      if (qry.data.repositories === null) return;

      setRepositories(qry.data.repositories)
    }
  }, [qry.data])


  return { repositories, loading: qry.loading, error: qry.error, refetch: GET_REPOSITORIES };
};

export default useRepositories;
