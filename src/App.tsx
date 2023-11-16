import { useEffect, useState } from "react";
import {Toaster} from "react-hot-toast";
import { TaskCreationForm } from "./components/TaskCreationForm/TaskCreationForm";
export interface Task {
  id: string;
  title: string;
  status: "option" | "todo" | "doing" | "waiting" | "done";
}

function App() {
const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {
  setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  console.info("UseEffect körs");
}, []);
  return (
    <>
    <Toaster />
      <div className=" bg-slate-100 w-screen h-screen flex flex-col items-center gap-16 pt-32">
      <TaskCreationForm tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}
export default App


