<template>
  <form
    novalidate 
    @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Todoを追加する</label>
      <input 
        v-model="title"
        id="title" 
        class="form-control"
        :class="{ 'is-invalid': error }" 
        type="text" 
        placeholder="タイトルを入力"
        required />
      <div class="invalid-feedback">
        タイトルを入力してください。
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const title = ref('')
    const error = ref(false)

    const handleSubmit = () => {
      if (title.value.trim() === '') {
        error.value = true
        return
      }
      error.value = false
      emit('on-submit', title.value)
      title.value = ''
    }

    return {
      title,
      error,
      handleSubmit
    }
  }
})
</script>