import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const TodoList = () => {
    const { theme } = useContext(ThemeContext);

    const todos = [
        { id: 1, text: "Todo 1" },
        { id: 2, text: "Todo 2" },
        { id: 3, text: "Todo 3" }
    ];

    return (
        <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={`flex items-center ${themeConfig[theme].todo.textColor} p-6 text-lg border-b ${themeConfig[theme].todo.borderColor} gap-4`}>
                        <button className={`w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer`}></button>

                        <p>{todo.text}</p>
                    </li>
                ))}
            </ul>

            <div className={`flex justify-between ${themeConfig[theme].filter.textColor} text-sm px-6 py-4`}>
                <p>{todos.length} items left</p>

                <div className="flex gap-4">
                    <button className="cursor-pointer">All</button>
                    <button className="cursor-pointer">Active</button>
                    <button className="cursor-pointer">Completed</button>
                </div>

                <button className="cursor-pointer">Clear completed</button>
            </div>
        </div>
    )
};

export default TodoList;