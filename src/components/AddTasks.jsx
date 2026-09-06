import { useState } from "react";

function AddTasks({ onAddTaskSumit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="bg-slate-50 border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(evento) => setTitle(evento.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-slate-50 border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(evento) => setDescription(evento.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se o título e a descrição não estão vazios
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }

          onAddTaskSumit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
