import { useEffect, useState } from "react";
import {Toaster} from "react-hot-toast";
import TaskCreationForm, { Task } from "./components/TaskCreationForm/TaskCreationForm";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TaskList } from "./components/TaskList";

function App() {
const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {  
  setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  console.info("UseEffect körs");
}, []);
  return (
    <>
    <Toaster />
      <div className=" bg-slate-300 w-screen h-screen flex flex-col items-center gap-16 pt-32">
      <TaskCreationForm tasks={tasks} setTasks={setTasks}/>
      <DndProvider backend={HTML5Backend}>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </DndProvider>
      </div>
    </>
  )
}
export default App

