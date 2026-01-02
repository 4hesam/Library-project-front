import { ref, computed, watch } from 'vue'
import { apolloClient } from 'src/boot/graphql'
import Create_Author from 'src/apis/createAuthor'
import Author_Query from 'src/apis/allAuther'
import { useQuery } from '@vue/apollo-composable'
import AUTHORS_PAGINATION from 'src/apis/authorsPagination'

export function useAuthor() {
  // const loading = ref(false)

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
  //books pagination

  const searchHandel = ref('')
  const debouncedSearch = ref('')
  let searchTimer = null

  const current = ref(1)
  const pageSize = 20

  const variables = computed(() => ({
    pageOffset: current.value,
    pageSize,
    search: debouncedSearch.value,
  }))

  const { result, loading } = useQuery(AUTHORS_PAGINATION, variables, {
    fetchPolicy: 'network-only',
  })

  const authors = computed(() => result.value?.authorsPagination.authors || [])

  const totalCount = computed(() => result.value?.authorsPagination.totalCount || 0)

  const totalPages = computed(() => result.value?.authorsPagination.totalPages || 0)

  watch(searchHandel, (val) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      debouncedSearch.value = val.trim()
      current.value = 1
    }, 500)
  })

  return {
    getAuthors,
    createAuthor,
    authors,
    searchHandel,
    current,
    totalPages,
    totalCount,
    loading,
  }
}
