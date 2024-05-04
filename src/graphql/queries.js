import { gql } from '@apollo/client'
import { REPO_PARTS } from './fragments'

export const GET_REPOSITORIES = gql`
  query(
    $orderBy: AllRepositoriesOrderBy!,
    $orderDirection: OrderDirection!,
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepoParts
        }
      }
    }
  }
  ${REPO_PARTS}
`

export const GET_ME = gql`
  query($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repository {
              fullName
            }
            text
            rating
            createdAt
          }
        }
      }
    }
  }
`

export const GET_REPO = gql`
  query($id: ID!) {
    repository(id: $id) {
      ...RepoParts
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPO_PARTS}
`
