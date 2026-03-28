const TodoForm = () => {
    return (
        <form className="relative mb-10">
            <span className="absolute w-6 h-6 border border-dark-grayish-blue rounded-full top-1/2 transform -translate-y-1/2 left-6"></span>

            <input className="bg-dark-desaturated-blue w-full text-white rounded-md py-6 pl-16 outline-none text-lg" type="text" placeholder="Create a new todo..." name="todo" />
        </form>
    )
};

export default TodoForm;