import gql from 'graphql-tag'

export default gql`
  mutation createBook($name: String!, $authorId: ID!, $inventory: Int!, $fileUrl: String!) {
    createBook(name: $name, authorId: $authorId, inventory: $inventory, fileUrl: $fileUrl) {
      id
      name
      inventory
      fileUrl
      author {
        id
        name
      }
    }
  }
`
