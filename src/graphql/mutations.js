import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
     accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation(
    $owner: String!,
    $repo: String!,
    $rating: Int!,
    $review: String
  ) {
    createReview(review: {
      ownerName: $owner,
      repositoryName: $repo,
      rating: $rating,
      text: $review
    }) {
      repositoryId
    }
  }
`
