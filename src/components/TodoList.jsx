import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos } = props;
  const tab = 'All'

  // filterTodosList() checks if TodoCard should be in each tab
  const filterTodosList = function() {
    if (tab === 'All') return todos;
    if (tab === 'Completed') return todos.filter(val => val.complete);
    return todos.filter(val => !val.complete);
  }

  return (
    <>
      {filterTodosList().map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />
        )
      })}
    </>
  )
}