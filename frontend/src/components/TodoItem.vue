<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="flex-grow-1">
      <h4>{{ todo.title }}</h4>
    </div>
    <div class="px-4">
      <span v-if="todo.done" class="badge badge-pill badge-success p-2">
        完了
      </span>
      <span v-else class="badge badge-pill badge-secondary p-2">
        未完
      </span>
    </div>
    <div class="px-4">
      <button class="btn btn-primary mr-2">更新</button>
      <button class="btn btn-danger">削除</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '../types'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    }
  },
})
</script>