import type { Todo } from "../../App";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

interface TodoListProps {
    todoList: Todo[]
};

const TodoList = ({ todoList }: TodoListProps) => {
    const context = useContext(ThemeContext);

    const { theme } = context;

    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md ${themeConfig[theme].todo.shadow}`}>
                <ul>
                    {todoList.map((todo) => (
                        <li key={todo.id} className={`flex items-center ${themeConfig[theme].todo.textColor} p-5 sm:text-lg border-b ${themeConfig[theme].todo.borderColor} gap-4`}>
                            <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                                <button className={`w-full h-full border ${themeConfig[theme].todo.borderColor} ${themeConfig[theme].todo.backgroundColor} rounded-full cursor-pointer`}></button>
                            </span>

                            <p className="pt-1">{todo.text}</p>
                        </li>
                    ))}
                </ul>

                <div className={`flex justify-between ${themeConfig[theme].filter.textColor} text-sm px-6 py-4`}>
                    <p>{todoList.length} items left</p>

                    <div className="hidden sm:flex gap-4">
                        <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover} text-bright-blue`}>All</button>
                        <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover}`}>Active</button>
                        <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover}`}>Completed</button>
                    </div>

                    <button className={`cursor-pointer ${themeConfig[theme].filter.hover}`}>Clear completed</button>
                </div>
            </div>

            <div className={`flex justify-center gap-5 py-4 rounded-md mt-4 ${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].filter.textColor} sm:hidden ${themeConfig[theme].todo.shadow}`}>
                <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover} text-bright-blue`}>All</button>
                <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover}`}>Active</button>
                <button className={`cursor-pointer font-bold ${themeConfig[theme].filter.hover}`}>Completed</button>
            </div>
        </>
    )
};

export default TodoList;