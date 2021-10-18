import React, { useEffect, useState } from 'react';
import "./Todo.css";
import CreateTask from './components/CreateTask';
import {Button} from 'antd';
import { Typography } from 'antd';
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

const {Text} = Typography;
const Task = ({task, index, completeTask, removeTask}) => {
    return(
        <div
            className="task"
            style = {{textDecoration: task.completed ? "line-through red" : ""}}
        >
            {task.title}
            <Button
                icon = {<CloseCircleOutlined/>}
                style = {{background: "red"}}
                onClick = {()=>removeTask(index)}
            ></Button>
            <Button
                icon = {<CheckCircleOutlined/>}
                onClick = {()=>completeTask(index)}
            ></Button>
        </div>
    );
};
const Todo = () =>{
    const [taskRemaining, setTaskRemaining] = useState(0);
    const [taskDone, setTaskDone] = useState(0);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Task 1",
            completed: true,
            timeline: 3-10-2021
        },
        {
            id: 2,
            title: "Tast 2",
            completed: false,
        },
        {
            id: 3,
            title: "Task 3",
            completed: false,
        }
    ])
    useEffect(()=>{
        setTaskRemaining(tasks.filter((task) => !task.completed).length);
    })
    useEffect(()=>{
        setTaskDone(tasks.filter((task)=> task.completed).length);
    })

    const addTask = (title) =>{
        const newTasks = [...tasks, {title,completed: false}];
        setTasks(newTasks);
    };
    const completeTask = (index ) =>{
        const newTasks = [...tasks];
        newTasks[index].completed= true;
        setTasks(newTasks);
    };
    const removeTask = (index) =>{
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return (
        <div className = "todo-container">
            <div className = "header">
                <div className = "header-1">
                    <Text code>Task chưa hoàn thành({taskRemaining})</Text>
                </div>
                <div className = "header-2">
                    <Text code>Task đã hoàn thành({taskDone})</Text>
                </div>
            </div>
            <div className="tasks">
                {tasks.map((task,index)=>(
                    <Task
                        task = {task}
                        index = {index}
                        key = {index}
                        completeTask  = {completeTask}
                        removeTask = {removeTask}
                    /> 
                ))}
            </div>
            <div className="create-task">
                <CreateTask addTask={addTask}/>
            </div>
        </div>
    );
};

export default Todo;