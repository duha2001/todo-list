import React from 'react';
import {Button} from 'antd';
import {CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';

const Task = ({task, index, completeTask, removeTask}) =>{
    return(
        <div className="task" 
            style={{textDecoration: task.completed?"line-through red":""}}>
            {task.title}
            <Button
                icon={<CloseCircleOutlined/>}
                style = {{background: "red"}}
                onclick = {()=>removeTask(index)}
            ></Button>
            <Button 
                icon={<CheckCircleOutlined/>}
                onclick = {()=>completeTask(index)}
            ></Button>

        </div>
    )
}
export default Task;