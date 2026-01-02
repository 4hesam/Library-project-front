import gql from "graphql-tag";

  export default  gql`
    query authorsPagination($pageOffset: Int!, $pageSize: Int!, $search: String) {
      authorsPagination(pageOffset: $pageOffset, pageSize: $pageSize, search: $search) {
        authors {
          id
          name
          books {
            name
          }
        }
        totalCount
        totalPages
      }
    }
  `
