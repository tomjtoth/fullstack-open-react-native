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
