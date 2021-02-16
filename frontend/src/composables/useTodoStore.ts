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

  return {
    todos,
    addTodo
  }
}