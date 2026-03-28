const TodoList = () => {
    const todos = [
        { id: 1, text: "Todo 1" },
        { id: 2, text: "Todo 2" },
        { id: 3, text: "Todo 3" }
    ];

    return (
        <div className="bg-dark-desaturated-blue rounded-md">
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center text-muted-gray p-6 text-lg border-b border-dark-grayish-blue gap-4">
                        <button className="w-6 h-6 border border-dark-grayish-blue rounded-full cursor-pointer"></button>

                        <p>{todo.text}</p>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between text-muted-gray p-4">
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