import gql from 'graphql-tag'

export default gql`
  mutation Borrow($startTime: String!, $endTime: String!, $bookId: ID!) {
    borrowBook(startTime: $startTime, endTime: $endTime, bookId: $bookId) {
      id
      startTime
      endTime
      book {
        id
        name
      }
    }
  }
`
