import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos } = props;
  const tabs = 'All'

  return (
    <>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />
        )
      })}
    </>
  )
}