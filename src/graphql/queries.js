import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryFields
        }
      }
    }
  }

  ${REPOSITORY_FIELDS}
`

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...repositoryFields
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

  ${REPOSITORY_FIELDS}
`

export const CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`
