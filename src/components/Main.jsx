import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import ItemLoader from './RepositoryList/ItemLoader';
import SignIn from './SignIn';
import AppBar from './AppBar';

const Main = () => {

  return (
    <View >
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:repoId" element={<ItemLoader />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View >
  );
};

export default Main;