import gql from 'graphql-tag'

export default gql`
  query userBorrow {
    userBorrow {
      id
      book {
        id
        fileUrl
        name
      }
      startTime
      endTime
    }
  }
`
