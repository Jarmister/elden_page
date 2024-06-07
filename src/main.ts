import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import './style.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'


const httpLink = createHttpLink({
    uri: 'https://eldenring.fanapis.com/api/graphql',
  })
  const cache = new InMemoryCache()
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


createApp(App)
.provide(DefaultApolloClient, apolloClient)
.mount('#app')
