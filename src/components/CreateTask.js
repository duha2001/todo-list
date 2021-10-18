import React, {useState} from 'react';
import {Input} from 'antd';

const CreateTask = ({addTask}) =>{
    const [value,setValue] = useState("");
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!value) return;

        addTask(value);
        setValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                className="input"
                value = {value}
                placeholder="Thêm task mới"
                onChange = {e => setValue(e.target.value)}
            />
        </form>
    );
};
export default CreateTask;
