import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>

      <TodoForm></TodoForm>

      <TodoList></TodoList>
    </TodoContainer>
  )
};

export default App;