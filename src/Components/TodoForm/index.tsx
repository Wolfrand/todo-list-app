import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, type FormEvent } from "react";

interface TodoInputProps {
    addTodo: (event: FormEvent<HTMLFormElement>) => void
};

const TodoForm = ({ addTodo }: TodoInputProps) => {
    const context = useContext(ThemeContext);

    const { theme } = context;

    return (
        <form className="relative mb-6" onSubmit={addTodo}>
            <span className={`
                    absolute w-6 h-6 border rounded-full top-1/2 transform -translate-y-1/2 left-6
                    ${themeConfig[theme].todo.borderColor}
                `}
            ></span>

            <input
                className={`w-full rounded-md pl-16 pt-6.5 pb-6 sm:pt-7.25 outline-none text-lg placeholder:text-[1rem] sm:placeholder:text-lg
                    ${themeConfig[theme].todo.backgroundColor}
                    ${themeConfig[theme].todo.textColor}
                `}
                type="text"
                placeholder="Create a new todo..."
                name="todo" 
            />
        </form>
    )
};

export default TodoForm;