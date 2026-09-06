import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-slate-400 text-left cursor-pointer w-full text-white p-2 rounded-md 
            ${tasks.isCompleted && "line-through"}`}
          >
            {tasks.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(tasks)}
            className="bg-slate-400 cursor-pointer p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTaskDelete(tasks.id)}
            className="bg-slate-400 cursor-pointer p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
