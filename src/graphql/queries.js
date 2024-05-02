import { gql } from '@apollo/client'
import { REPO_PARTS } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
  query {
    me {
      id
      username
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
