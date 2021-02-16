<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id" class="list-group">
      <todo-item :todo="todo" />
    </ul>
    <todo-form class="mt-4" @on-submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { httpClient } from '../utils/httpClient'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'
import { Todo } from '../types'

export default defineComponent({
  components: {
    TodoItem,
    TodoForm
  },
  setup() {
    const todos = ref<Todo[]>([])

    onMounted(async () => {
      const { data } = await httpClient.get('/todos')
      todos.value = data.todos
    })

    const handleSubmit = async (title: string) => {
      const { data } = await httpClient.post('/todos', { title })
      todos.value.push(data.todo)
    }
    
    return {
      todos,
      handleSubmit
    }
  }
})
</script>
