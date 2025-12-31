import { ref, computed, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import BOOKS_PAGINATION from 'src/apis/booksPagination'
import { apolloClient } from 'src/boot/graphql'
import CREATE_BOOK from 'src/apis/createBook'
import AUTHORS_QUERY from 'src/apis/allAuther'
import BORROW_MUTATION from 'src/apis/borrowBook'

export function useBook() {
  const model = ref('best selling')
  const searchHandel = ref('')
  const debouncedSearch = ref('')
  let searchTimer = null

  const current = ref(1)
  const pageSize = 20
  const loading = ref(false)

  const variables = computed(() => ({
    pageOffset: current.value,
    pageSize,
    search: debouncedSearch.value,
  }))

  const { result } = useQuery(BOOKS_PAGINATION, variables, {
    fetchPolicy: 'network-only',
  })

  const books = computed(() => result.value?.booksPagination.books || [])
  const totalCount = computed(() => result.value?.booksPagination.totalCount || 0)
  const totalPages = computed(() => result.value?.booksPagination.totalPages || 0)

  //search Bar Author
  watch(searchHandel, (val) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      debouncedSearch.value = val.trim()
      current.value = 1
    }, 500)
  })

  const authorOptions = ref([])

  //convert id Author to Name txt
  const getAuthors = async () => {
    try {
      const { data } = await apolloClient.query({
        query: AUTHORS_QUERY,
        fetchPolicy: 'no-cache',
      })
      authorOptions.value = data.authors.map((a) => ({
        label: a.name,
        value: a.id,
      }))
    } catch (err) {
      console.error('Error fetching authors:', err)
    }
  }

  const confirmBorrow = async (bookId, startTime, endTime) => {
    // const showBorrow = ref(false)
    // const { client } = useApolloClient()

    try {
      const response = await apolloClient.mutate({
        mutation: BORROW_MUTATION,
        variables: {
          bookId,
          startTime,
          endTime,
        },
      })
      console.log('BORROW RESPONSE:', response)

      if (response.data.borrowBook.success) {
        alert('Book borrowed successfully!')
        // showBorrow.value = false
        return
      }
      alert('Failed to borrow the book. Please try again.')
    } catch (err) {
      console.log('BORROW ERROR:', err)
    }
  }

  const addButtonModal = ref(false)

  //create New book
  const createBook = async (book) => {
    // {name, authorId, inventory, fileUrl}

    try {
      await apolloClient.mutate({
        mutation: CREATE_BOOK,
        variables: {
          name: book.name,
          authorId: book.author.value,
          inventory: +book.inventory,
          fileUrl: book.fileUrl,
        },
      })
    } catch (err) {
      console.error('Error creating book:', err)
    }
  }

  return {
    model,
    searchHandel,
    books,
    loading,
    current,
    totalPages,
    totalCount,
    confirmBorrow,
    result,

    getAuthors,
    addButtonModal,
    authorOptions,
    createBook,
  }
}
