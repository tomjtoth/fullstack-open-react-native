import { useEffect, useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Route, Routes, Navigate, useMatch } from 'react-router-native';
import { useQuery } from '@apollo/client'

import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryList/Item';
import SignIn from './SignIn';
import AppBar from './AppBar';
import { GET_REPO } from '../graphql/queries';

const Main = () => {

  const [repo, setRepo] = useState(null);
  const matchedId = useMatch('/repositories/:id');
  const itemId = matchedId ? matchedId.params.id : null;
  const qry = useQuery(GET_REPO, { variables: { id: 'async-library.react-async' } });

  useEffect(() => {
    if (qry.data) {
      if (qry.data.repository === null) return;

      setRepo(qry.data.repository)
    }
  }, [qry.data])

  useEffect(() => {
    if (itemId) qry.refetch({ id: itemId })
  }, [itemId])

  return (<>
    <View >
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<RepositoryItem item={repo} showButton />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  </>
  );
};

export default Main;