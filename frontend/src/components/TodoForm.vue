<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Todoを追加する</label>
      <input 
        v-model="title"
        id="title" 
        class="form-control" 
        type="text" 
        placeholder="タイトルを入力" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const title = ref('')

    const handleSubmit = () => {
      emit('on-submit', title.value)
      title.value = ''
    }

    return {
      title,
      handleSubmit  
    }
  }
})
</script>