import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos, selectedTab } = props;

  // filterTodosList() checks if TodoCard should be in each tab
  const filterTodosList = function() {
    if (selectedTab === 'All') return todos;
    if (selectedTab === 'Completed') return todos.filter(val => val.complete);
    return todos.filter(val => !val.complete);
  }

  return (
    <>
      {filterTodosList().map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo={todo} />
        )
      })}
    </>
  )
}