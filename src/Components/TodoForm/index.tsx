import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const TodoForm = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <form className="relative mb-6">
            <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full top-1/2 transform -translate-y-1/2 left-6`}></span>

            <input className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`} type="text" placeholder="Create a new todo..." name="todo" />
        </form>
    )
};

export default TodoForm;