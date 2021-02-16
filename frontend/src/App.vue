<template>
  <the-header />
  <main>
    <div class="container mt-4">
      <todo-list />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from './components/TheHeader.vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    TodoList
  }
});
</script>
