import { gql } from '@apollo/client'

export const REPO_PARTS = gql`
  fragment RepoParts on Repository {
    id
    description
    fullName
    language
    forksCount
    openIssuesCount
    ownerAvatarUrl
    reviewCount
    ratingAverage
    stargazersCount
    url
  }
`