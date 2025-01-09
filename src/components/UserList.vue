<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="mb-2">
        <strong>{{ user.name }}</strong> - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

interface User {
  id: number
  name: string
  email: string
}

export default defineComponent({
  name: 'UserList',
  setup() {
    const users = ref<User[]>([])

    onMounted(async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    })

    return {
      users,
    }
  },
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
