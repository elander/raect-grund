import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

export interface Task {
  id: string;
  title: string;
  status: "option" | "todo" | "doing" | "waiting" | "done";
}
interface TaskCreationFormProps {
  tasks: Task[];
  setTasks: ( tasks: Task[] ) => void;
}
export default function TaskCreationForm( { tasks, setTasks }: TaskCreationFormProps ) {
  const [ task, setTask ] = useState<Task>( {
    id: uuidv4(),
    title: "",
    status: "option"
  } );

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if ( task.title.length < 2 || task.title.length > 20 ) {
      return toast.error( "Title must be between 2 and 20 characters" );
    }
    const newTasklist = [ ...tasks, task ];
    setTasks( newTasklist );
    // console.log(task);
    localStorage.setItem( "tasks", JSON.stringify( newTasklist ) );
    toast.success( "Task created" );
    setTask( {
      id: uuidv4(),
      title: "",
      status: "option"
    } );
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 border-slate-400 
      bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
        type="text" name="title" value={task.title}
        onChange={( event ) => setTask( { ...task, title: event.target.value } )} />
      <button>Create</button>
    </form>
  );
}
