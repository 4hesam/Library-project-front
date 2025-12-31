import { apolloClient } from 'src/boot/graphql'
import Create_Author from 'src/apis/createAuthor'
import Author_Query from 'src/apis/allAuther'
import { ref } from 'process'

export function useAuthor() {
  const loading = ref(false)

  const getAuthors = async () => {
    loading.value = true
    try {
      const { data } = await apolloClient.query({
        query: Author_Query,
        fetchPolicy: 'no-cache',
      })

      return data.authors
    } catch (error) {
      console.error('GraphQL Error:', error)
    } finally {
      loading.value = false
    }
  }
  //create new Author
  const createAuthor = async (name) => {
    try {
      const res = await apolloClient.mutate({
        mutation: Create_Author,
        variables: {
          name: name,
        },
      })
      console.log('Author created:', res.data.createAuthor)

      alert('Author added successfully!')
    } catch (error) {
      console.error('Error creating author:', error)
    }
  }
  return {
    getAuthors,
    createAuthor,
  }
}
