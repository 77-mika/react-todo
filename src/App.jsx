import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TopForm from './components/TopForm';
import TaskList from './components/tasklist';
import { taskContext } from './components/taskContext';
const App = () => {
    const [taskItems, setTaskItems] = useState([
        // {
        //     id: 1,
        //     title: '1. Buying a BMW 325i',
        //     status: false,
        // },
        // {
        //     id: 2,
        //     title: '2. Buying a Audi A4',
        //     status: true,
        // },
        // {
        //     id: 3,
        //     title: '1. Buying a BMW 320i',
        //     status: false,
        // },
    ]);

    return (
        <div className="container">
            <taskContext.Provider value={{
                taskItems,
                setTaskItems
            }} >
                <TopForm />
                <TaskList />
            </taskContext.Provider>
        </div>
    );
};

export default App;
