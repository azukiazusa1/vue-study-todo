<template>
  <form novalidate>
    <div class="form-group">
      <label for="title">Todoを追加する</label>
      <input 
        v-model="title"
        id="title" 
        class="form-control" 
        type="text" 
        placeholder="タイトル" />
        {{ title }}
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const title = ref('')

    return {
      title
    }
  }
})
</script>