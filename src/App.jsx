import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      // Chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      // Pegar dados que ela retornar
      const data = await response.json();

      // armazenar esses dados no state
      setTasks(
        data.map((task) => ({
          id: task.id,
          title: task.title,
          description: "",
          isCompleted: task.completed,
        })),
      );
    }

    // SE QUISER, VOCE PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    //fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSumit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSumit={onAddTaskSumit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
