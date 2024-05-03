import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import ItemLoader from './RepositoryList/ItemLoader';
import SignIn from './SignIn';
import AppBar from './AppBar';
import Review from './Review'

const Main = () => {

  return (
    <View >
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:repoId" element={<ItemLoader />} />
        <Route path="/create-review" element={<Review />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View >
  );
};

export default Main;