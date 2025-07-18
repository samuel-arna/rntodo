import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Task = {
    id: string;
    title: string;
    completed: boolean;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: string) => void;
    clearCompleted: () => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTasks deve ser usado dentro de TaskProvider');
    return context;
};

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
        setTasks(prev => [
            ...prev,
            { id: Date.now().toString(), title, completed: false },
        ]);
    };

    const toggleTask = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const clearCompleted = () => {
        setTasks(prev => prev.filter(task => !task.completed));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, clearCompleted }}>
            {children}
        </TaskContext.Provider>
    );
}; 