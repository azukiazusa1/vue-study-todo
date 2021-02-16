<template>
  <div>{{ todos }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  setup() {
    return {
      todos
    }
  }
})
</script>
