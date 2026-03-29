import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { themeConfig } from "./contexts/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
      <div className={`${themeConfig[theme].layout.heroClass}`}>
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