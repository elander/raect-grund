import toast from "react-hot-toast";
import { Task } from "./TaskCreationForm/TaskCreationForm";
import { useDrag, useDrop } from "react-dnd";

interface TaskListProps {
  tasks: Task[];
  setTasks: ( tasks: Task[] ) => void;
}
export function TaskList( { tasks, setTasks }: TaskListProps ) {
  const statuses = [ "option", "todo", "doing", "waiting", "done" ];
  return (
    <div className="flex gap-12">
      {statuses.map( ( status ) => {
        return <Section key={status} status={status} tasks={tasks} setTasks={setTasks} />;
      } )}
    </div>
  );
}
interface SectionProps {
  status: string;
  tasks: Task[];
  setTasks: ( tasks: Task[] ) => void;
}
function Section( { status, tasks, setTasks }: SectionProps ) {
  const sectionTasks = tasks.filter(
    ( task ) => task.status === status );
    
  const [{isOver}, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: Task) => addItemToThisSection(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  const addItemToThisSection = (task: Task) => {
    const oldStatus = task.status;
    setTasks((prev) => {
      const mTasks = prev.map((t: Task) => {
        if (t.id === task.id) {
          return { ...t, status: status };
        }

        return t;
      });

      localStorage.setItem("tasks", JSON.stringify(mTasks));

      toast(`Task ${task.title} changed status from ${oldStatus} to ${status}`, { icon: "😮" });

      return mTasks;
    });
  }

  const backgroundColor = new Map<string, string>( [
    [ "doing", "bg-red-600" ],
    [ "done", "bg-slate-500" ],
    [ "option", "bg-blue-400" ],
    [ "todo", "bg-green-400" ],
    [ "waiting", "bg-orange-400" ],
  ] );
  return (
    <div ref={drop} className={` ${isOver ? "bg-slate-200" : ""} w-32 rounded-md p-2 bg-slate-100`}>
      <h2 className={` ${ backgroundColor.get( status ) } flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {status}
      </h2>
      <div>
        {sectionTasks.map( ( item ) => {
          return <TaskItem key={item.id} tasks={tasks} setTasks={setTasks} task={item} />;
        } )}

      </div>
    </div>
  );
}
interface TaskItemProps {
  task: Task;
  tasks: Task[];
  setTasks: ( tasks: Task[] ) => void;
}
const TaskItem = ( props: TaskItemProps ) => {
  const { task, tasks, setTasks } = props;

  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // console.log("IsDragging: ",isDragging)


  const handleRemove = ( id: string ) => {
    const newTasks = tasks.filter( ( task ) => task.id !== id );
    setTasks( newTasks );
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    toast.success( `Task "${ task.title }" removed` );
  };
  return (
    <div ref={drag} className=" bg-white relative p-4 mt-8 shadow-md rounded-md cursor-grab">
      <p>{task.title}</p>
      <button
        className="absolute bottom-1 right-1"
        onClick={() => handleRemove( task.id )}
      >🗑</button>
    </div>
  );
};
