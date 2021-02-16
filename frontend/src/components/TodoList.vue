<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id" class="list-group">
      <todo-item :todo="todo" />
    </ul>
    <todo-form class="mt-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'
import { Todo } from '../types'

const todos: Todo[] = [
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
]

export default defineComponent({
  components: {
    TodoItem,
    TodoForm
  },
  setup() {
    return {
      todos
    }
  }
})
</script>
