<!-- 
Main Page
MAP PAGE 
SECONDARY Info  
 1 sidebar - with information on elden ring character 
 2 loader - loading effect simmilar to elden ring intro or menu screen
 3 family tree



 --> <script setup>
 import { useQuery } from '@vue/apollo-composable'
 import gql from 'graphql-tag'

 const { result } = useQuery(gql`
  query {
    boss(name: "Malenia, Blade Of Miquella") {
    id,
    name,
    description,
    image
  }
}
 `)
 </script>

 <template>
   <h2>Hello {{ result ?? 'world' }}</h2>
 </template>