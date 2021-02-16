import Express from 'express'
import cors from 'cors'

const app = Express()
const port = 3000

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

const todos = [
  {
    id: 1,
    title: 'title1',
    done: true,
  },
  {
    id: 2,
    title: 'title2',
    done: false,
  },
  {
    id: 3,
    title: 'title3',
    done: true,
  },
]

app.get('/api/todos', (req, res) => {
  res.json({ todos })
})

app.post('/api/todos', (req, res) => {
  const todo = {
    id: Date.now(),
    title: req.body.title,
    done: false
  }

  todos.push(todo)
  res.json({ todo })
})

app.put('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(todo => todo.id === Number(req.params.id))
  if (index === -1) {
    return res.status(400).json({ message: `id ${req.params.id} is not found`})
  }
  todos[index].done = req.body.done
  res.status(201).json({ message: 'update successful.' })
})

app.delete('/api/todo/:id', (req, res) => {
  const index = todos.findIndex(todo => todo.id === Number(req.params.id))
  if (index === -1) {
    return res.status(400).json({ message: `id ${req.params.id} is not found`})
  }
  todos.splice(index, 1)
  res.status(201).json({ message: 'delete successful.' })
})

app.listen(port, () => {
  console.log('server start')
})