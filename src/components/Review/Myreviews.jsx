import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useQuery } from '@apollo/client'
import ItemSeparator from '../ItemSeparator'
import ReviewItem from './Item'

import { GET_ME } from '../../graphql/queries'

const MyReviews = () => {
  const [reviews, setReviews] = useState([])
  const { data, refetch: refetchReviews } = useQuery(GET_ME, { variables: { includeReviews: true } });

  useEffect(() => {
    if (data) {
      if (data.me === null) return;

      setReviews(data.me.reviews.edges.map(
        ({ node: { id, repository: { fullName: repoName, id: repoId }, text, rating, createdAt } }) =>
          ({ id, text, rating, createdAt, user: { username: 'dummy' }, repoName, repoId })
      ))
    }

  }, [data])


  return reviews

    ? <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={{ ...item, refetchReviews }} />}
      keyExtractor={({ id }) => id}
    />

    : null


}

export default MyReviews
