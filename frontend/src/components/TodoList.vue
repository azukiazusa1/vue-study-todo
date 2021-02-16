<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id" class="list-group">
      <todo-item :todo="todo"
        @on-update-click="updateTodo"
        @on-delete-click="deleteTodo"
      />
    </ul>
    <todo-form class="mt-4" @on-submit="addTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { httpClient } from '../utils/httpClient'
import { useTodoStore } from '../composables/useTodoStore'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'
import { Todo } from '../types'

export default defineComponent({
  components: {
    TodoItem,
    TodoForm
  },
  setup() {
    const { todos, addTodo, updateTodo, deleteTodo } = useTodoStore()
    
    return {
      todos,
      addTodo,
      updateTodo,
      deleteTodo
    }
  }
})
</script>
