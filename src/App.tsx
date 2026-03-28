import TodoForm from "./Components/TodoForm";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <main className="bg-very-dark-blue h-screen">
      <div className="bg-[url(/images/bg-desktop-dark.jpg)] h-80 bg-cover bg-center">
        <div className="max-w-175 m-auto p-8">
          <TodoHeader></TodoHeader>

          <TodoForm></TodoForm>

          <TodoList></TodoList>
        </div>
      </div>
    </main>
  )
};

export default App;