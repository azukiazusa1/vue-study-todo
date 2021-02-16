import { Todo } from "@/types";
import { httpClient } from "@/utils/httpClient";
import { onMounted, ref } from "vue";

const todos = ref<Todo[]>([])

export const useTodoStore = () => {
  onMounted(async () => {
    const { data } = await httpClient.get('/todos')
    todos.value = data.todos
  })

  const addTodo = async (title: string) => {
    const { data } = await httpClient.post('/todos', { title })
    todos.value.push(data.todo)
  }

  const updateTodo = async (id: number) => {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index === -1) {
      throw new Error(`id ${id} is not found.`)
    }
    await httpClient.put(`/todos/${id}`, { done: !todos.value[index].done })
    todos.value[index].done = !todos.value[index].done
  }

  const deleteTodo = async (id: number) => {
    await httpClient.delete(`/todos/${id}`)
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo
  }
}