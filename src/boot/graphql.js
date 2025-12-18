import { boot } from 'quasar/wrappers'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createUploadLink } from 'apollo-upload-client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setContext } from 'apollo-link-context'
import { onError } from '@apollo/client/link/error'

// ---- Token Helper ----
const getHeaders = () => {
  const token = localStorage.getItem('token')
  console.log('token: ', token)
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// ---- Auth Link ----
const authLink = setContext(() => ({
  headers: getHeaders(),
}))

// ---- Error Handling ----
const errorLink = onError((error) => {
  if (error.graphQLErrors) {
    console.error('[GraphQL Error]', error.graphQLErrors)
  }
  if (error.networkError) {
    console.error('[Network Error]', error.networkError)
  }
})

const BASE_URL = 'http://localhost:4000/graphql'

// ---- HTTP Link ----
const httpLink = createUploadLink({
  uri: BASE_URL, // adjust if needed
})

// ---- Apollo Client ----
const apolloClient = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})

export default boot(({ app }) => {
  app.provide(DefaultApolloClient, apolloClient)
})

export { apolloClient }
