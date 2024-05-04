import { useNavigate } from 'react-router-native'
import { useMutation } from '@apollo/client';

import ReviewForm from './Form';
import { CREATE_REVIEW } from '../../graphql/mutations';

const Review = () => {
  const [mutate] = useMutation(CREATE_REVIEW, { fetchPolicy: 'cache-and-network', });
  const navi = useNavigate();

  const onSubmit = ({ owner, repo, rating, review }) => {
    mutate({ variables: { owner, repo, rating: Number(rating), review } })
      .then(({ data: { createReview } }) => {
        if (createReview)
          navi(`/repositories/${createReview.repositoryId}`);
      })
  }

  return <ReviewForm onSubmit={onSubmit} />
};

export default Review;
