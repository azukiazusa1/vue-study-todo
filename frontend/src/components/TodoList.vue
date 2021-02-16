<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id" class="list-group">
      <todo-item :todo="todo" />
    </ul>
    <todo-form class="mt-4" @on-submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'
import { Todo } from '../types'


export default defineComponent({
  components: {
    TodoItem,
    TodoForm
  },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        title: 'todo1',
        done: true,
      },
      {
        id: 2,
        title: 'todo2',
        done: false,
      },
      {
        id: 3,
        title: 'todo3',
        done: true,
      },
    ])
    
    const handleSubmit = (title: string) => {
      todos.value.push({
        id: todos.value.length + 1,
        title,
        done: false
      })
    }
    
    return {
      todos,
      handleSubmit
    }
  }
})
</script>
