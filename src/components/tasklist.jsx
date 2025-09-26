import React, { useContext } from 'react';
import { taskContext } from './taskContext';

const TaskList = () => {
    const { taskItems, setTaskItems } = useContext(taskContext);

    const handelSetDoneTask = (id) => {
        const index = taskItems.findIndex((task) => task.id == id);
        let newTaskItem = [...taskItems];
        newTaskItem[index].status = !newTaskItem[index].status;
        setTaskItems(newTaskItem);
    };

    const handelDeleteWork = (id)=>{
        let newTask = taskItems.filter(work=>work.id !== id);
        setTaskItems(newTask);
    }

    if (taskItems.length) {
        return (
            <div className="innercontainer2">
                {taskItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.status ? 'works-done' : 'works'}`}
                    >
                        <p className="text">{item.title}</p>
                        <div className="actions">
                            <i
                                className="bx bxs-trash"
                                onClick={() => handelDeleteWork(item.id)}
                            ></i>
                            <i
                                onClick={() => {
                                    return handelSetDoneTask(item.id);
                                }}
                                className={`${
                                    item.status
                                        ? 'bx bxs-edit-alt'
                                        : 'bx bx-edit'
                                }`}
                            ></i>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className="innercontainer2">
                <div className="noItems">
                    <h1 className="noItem-title">no task here</h1>
                </div>
            </div>
        );
    }
};
export default TaskList;
