import { defineStore } from 'pinia'
import { gql } from 'graphql-tag'
import { apolloClient } from 'src/boot/graphql'
import { computed, ref } from 'vue'

const USER_INFO = gql`
  query {
    me {
      id
      username
      email
      role
    }
  }
`

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const token = ref(null)

  const isAuthenticated = computed(() => !!user.value.id)

  function setUser(newUser) {
    localStorage.setItem('user', JSON.stringify(newUser))
    user.value = newUser
  }

  function setToken(newToken) {
    token.value = newToken
  }
  const fetchUser = async () => {
    try {
      const { data } = await apolloClient.query({
        query: USER_INFO,
        fetchPolicy: 'no-cache',
      })
      if (data?.me) {
        localStorage.setItem('user', JSON.stringify(data.me))
        user.value = data.me
      } else {
        localStorage.removeItem('token')
        window.location.href = '/login'
      }
    } catch (err) {
      console.error('Error fetching user:', err)
    }
  }

  fetchUser()

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    fetchUser,
  }
})
