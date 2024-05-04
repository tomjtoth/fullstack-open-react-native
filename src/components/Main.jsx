import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import ItemLoader from './RepositoryList/ItemLoader';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';
import Review from './Review';
import MyReviews from './Review/Myreviews';

const Main = () => {

  return (
    <View style={{ maxWidth: 1000 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:repoId" element={<ItemLoader />} />
        <Route path="/create-review" element={<Review />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View >
  );
};

export default Main;