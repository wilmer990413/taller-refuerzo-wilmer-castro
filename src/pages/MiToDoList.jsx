import {React, useState} from 'react'
import { useTask } from '../data/TaskContext';

function MiToDoList() {
    const { tasks, filter, addTask, toggleTask, deleteTask, setFilter} = useTask();
    const [newTaskText, setNewTaskText] = useState('');
    return (
        <div>
            <input value={newTaskText} type="text" placeholder="Nueva tarea" onChange={(e) => setNewTaskText(e.target.value)} />
            <button onClick={() => addTask(newTaskText)}>Agregar tarea</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => toggleTask(task)}>
                            {task.completed === true ? 'Marcar como pendiente' : 'Marcar como completada'}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
                
            <div>
                <label>Filtrar por:</label>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="all">Todas</option>
                    <option value="true">Completadas</option>
                    <option value="false">Pendientes</option>
                </select>
            </div>
        </div>
    );
}

export default MiToDoList