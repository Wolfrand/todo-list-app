import { useState, type FormEvent } from "react";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number,
  text: string,
  completed: boolean
};

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if(!todoItem.trim()) return

    setTodoList(prev => [...prev, {
      id: Date.now(),
      text: todoItem,
      completed: false
    }]);

    event.currentTarget.reset();
  };

  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList todoList={todoList}></TodoList>
    </TodoContainer>
  )
};

export default App;