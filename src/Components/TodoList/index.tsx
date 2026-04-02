import type { Todo } from "../../hooks/useTodo";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import IconCheck from "/images/icon-check.svg"
import IconCross from "/images/icon-cross.svg"

interface TodoListProps {
    todoList: Todo[];
    toggleTodoCompleted: (id: number) => void;
    setFilter: (filter: "all" | "active" | "completed") => void;
    filter: "all" | "active" | "completed";
    clearCompleted: () => void;
    removeTodo: (id: number) => void;
};

const TodoList = ({ todoList, toggleTodoCompleted, setFilter, filter, clearCompleted, removeTodo }: TodoListProps) => {
    const context = useContext(ThemeContext);

    const { theme } = context;

    return (
        <>
            <div className={`
                    rounded-md
                    ${themeConfig[theme].todo.backgroundColor}
                    ${themeConfig[theme].todo.shadow}
                `}
            >
                <ul>
                    {todoList.map((todo) => (
                        <li
                            key={todo.id}
                            className={
                                `flex items-center pt-5 pb-5 pl-6.5 pr-6.5 sm:text-lg border-b gap-4 group
                                ${themeConfig[theme].todo.borderColor}
                            `}
                        >
                            <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                                <button
                                    onClick={() => toggleTodoCompleted(todo.id)}
                                    className={`
                                        w-full h-full rounded-full cursor-pointer 
                                        border ${themeConfig[theme].todo.borderColor}
                                        ${themeConfig[theme].todo.backgroundColor} 
                                        ${todo.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}
                                    `}
                                >
                                    {todo.completed && (
                                        <img src={IconCheck} alt="ícone de marcado" className="h-2 w-2 m-auto" />
                                    )}
                                </button>
                            </span>

                            <p className={`
                                    pt-1
                                    ${themeConfig[theme].todo.textColor}
                                    ${todo.completed ? "line-through opacity-50" : ""}
                                `}
                            >
                                {todo.text}
                            </p>

                            <button 
                                className="sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 sm:cursor-pointer ml-auto"
                                onClick={() => removeTodo(todo.id)}
                            >
                                <img src={IconCross} alt="Excluir ToDo" />
                            </button>
                        </li>
                    ))}
                </ul>


                <div className={`
                        flex justify-between text-sm px-6 py-4
                        ${themeConfig[theme].filter.textColor}
                    `}
                >
                    <p>
                        {todoList.length} items left
                    </p>

                    <div className="hidden sm:flex gap-4">
                        <button
                            onClick={() => setFilter("all")}
                            className={`
                                cursor-pointer font-bold
                                ${themeConfig[theme].filter.hover}
                                ${filter === "all" ? "text-bright-blue" : ""}
                            `}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setFilter("active")}
                            className={`
                                cursor-pointer font-bold
                                ${themeConfig[theme].filter.hover}
                                ${filter === "active" ? "text-bright-blue" : ""}
                            `}
                        >
                            Active
                        </button>

                        <button
                            onClick={() => setFilter("completed")}
                            className={`
                                cursor-pointer font-bold
                                ${themeConfig[theme].filter.hover}
                                ${filter === "completed" ? "text-bright-blue" : ""}
                            `}
                        >
                            Completed
                        </button>
                    </div>

                    <button
                        onClick={() => clearCompleted()}
                        className={
                            `cursor-pointer
                            ${themeConfig[theme].filter.hover}
                        `}
                    >
                        Clear completed
                    </button>
                </div>
            </div>


            <div className={`
                    flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden
                    ${themeConfig[theme].todo.backgroundColor}
                    ${themeConfig[theme].filter.textColor}
                    ${themeConfig[theme].todo.shadow}
                `}
            >
                <button
                    onClick={() => setFilter("all")}
                    className={`
                        cursor-pointer font-bold
                        ${themeConfig[theme].filter.hover}
                        ${filter === "all" ? "text-bright-blue" : ""}
                    `}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("active")}
                    className={`
                        cursor-pointer font-bold
                        ${themeConfig[theme].filter.hover}
                        ${filter === "active" ? "text-bright-blue" : ""}
                    `}
                >
                    Active
                </button>

                <button
                    onClick={() => setFilter("completed")}
                    className={`
                        cursor-pointer font-bold
                        ${themeConfig[theme].filter.hover}
                        ${filter === "completed" ? "text-bright-blue" : ""}
                    `}
                >
                    Completed
                </button>
            </div>
        </>
    )
};

export default TodoList;