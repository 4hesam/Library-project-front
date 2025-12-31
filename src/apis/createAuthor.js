import gql from "graphql-tag";

export default gql`
  mutation createAuthor($name: String!) {
    createAuthor(name: $name) {
      id
      name
    }
  }
`
