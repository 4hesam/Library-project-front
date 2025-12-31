import gql from "graphql-tag";

  export default  gql`
    query booksPagination($pageOffset: Int!, $pageSize: Int!, $search: String) {
      booksPagination(pageOffset: $pageOffset, pageSize: $pageSize, search: $search) {
        books {
          id
          name
          author {
            name
          }
          inventory
          fileUrl
        }
        totalCount
        totalPages
      }
    }
  `
