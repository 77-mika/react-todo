import React, { Fragment, useContext, useState } from 'react';
import { taskContext } from './taskContext';

const TopForm = () => {
  const [task,setTask] = useState("")

  const {taskItems,setTaskItems} = useContext(taskContext)

  const handelSetTask = (event)=>{
    
    setTask(event.target.value)
  }
  const handeAddTask = (event)=>{
    event.preventDefault()
    setTaskItems([...taskItems, {id:Math.random(),title:task,done:false}])
    setTask("")
  }
    return (
        <Fragment>
            <form onSubmit={handeAddTask}>
                <h1 className="todo-title">My To-Do List</h1>
                <div className="innercontainer1">
                    <button id="mybtn" type='submit' >
                        Add
                    </button>
                    <input
                        type="text"
                        id="input"
                        value={task}
                        onChange={handelSetTask}
                    />
                </div>
            </form>
        </Fragment>
    );
};
export default TopForm;
