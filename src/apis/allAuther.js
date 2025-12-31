import gql from "graphql-tag";

export default  gql`
    query {
      authors {
        id
        name
      }
    }
  `
