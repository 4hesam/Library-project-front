<template>
  <div class="login-Frame">
    <img src="" />
    Email
    <q-input v-model="email" label="Email" class="email-btn" type="email" />
    Password
    <q-input v-model="password" label="Password" class="pass-btn" type="password" />
    <CusBtn label="Login" color="blue" @click="handleLogin" />
  </div>
</template>
<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import { gql } from 'graphql-tag'
import { ref } from 'vue'
import { useApolloClient } from '@vue/apollo-composable'

// import router from 'src/router'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')

const { client } = useApolloClient()

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
      }
    }
  }
`
const handleLogin = async () => {
  try {
    const res = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        email: email.value,
        password: password.value,
      },
    })

    if (res.data.login && res.data.login.token) {
      localStorage.setItem('token', res.data.login.token)
      console.log('Login Done.')
      router.push('/')
    } else {
      alert('Login failed: please check your email and password.')
    }
  } catch (err) {
    console.log('LOGIN ERROR:', err)
  }
}
</script>

<style scoped>
.login-Frame {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.header {
  height: 0%;
  margin: 0px;
}
</style>
