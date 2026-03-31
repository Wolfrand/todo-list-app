import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

interface TodoContainerProps {
    children: React.ReactNode;
};

const TodoContainer = ({children}: TodoContainerProps) => {
    const context = useContext(ThemeContext);

    const { theme } = context;

    return (
        <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass}`}>
                <div className="max-w-175 m-auto p-8">
                    {children}
                </div>
            </div>
        </main>
    )
};

export default TodoContainer;