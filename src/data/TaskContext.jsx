import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getTasksById, addTaskUser, deleteTaskUser, updateTaskUser } from '../services/tareas';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        case 'ADD_TASK':
            const newTask = action.payload || {};
            return { ...state, tasks: [...state.tasks, newTask] };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: task.completed === true? false : true } : task
                ),
            };
        case 'SET_FILTER':
            let tasksAux = state.tasks;
            if (action.payload === "true") {
                tasksAux = tasksAux.filter(task => task.completed === true);
            } else if (action.payload === "false") {
                tasksAux = tasksAux.filter(task => task.completed === false);
            }
            return { ...state, tasks: tasksAux , filter: action.payload };
        default:
            return state;
    }
};

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, {
        tasks: [],
        filter: 'all',
    });
    const { user } = useAuth();
    const getTasks = async () => {
        try {
            const response = await getTasksById(user.id);
            dispatch({ type: 'SET_TASKS', payload: response });
        } catch (error) {
            console.error('Error getting task:', error);
        }
    };
    const addTask = async (text) => {
        try {
            let data = { 
                idUser: user.id,
                text: text, 
                completed: false
            };
            await addTaskUser(data);
            dispatch({ type: 'ADD_TASK', payload: data });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };
    const deleteTask = async (id) => {
        try {
            await deleteTaskUser(id);
            dispatch({ type: 'DELETE_TASK', payload: id });
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    const toggleTask = async (task) => {
        try {
            task.completed = task.completed === true? false : true;
            await updateTaskUser(task.id, task);
            await getTasks();
            dispatch({ type: 'TOGGLE_TASK', payload: task.id });
        } catch (error) {
            console.error('Error completed update task:', error);
        }
    };
    const setFilter = async (filter) => {
        await getTasks();
        dispatch({ type: 'SET_FILTER', payload: filter });
    };
    useEffect(() => {
        getTasks();
    }, []);
    return <TaskContext.Provider value={{ ...state, getTasks, addTask, deleteTask, toggleTask, setFilter,  }}>{children}</TaskContext.Provider>;
};

const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};

export { TaskProvider, useTask };