import React, { useState } from 'react';
import './App.css';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [filtrarCompletadas, setFiltrarCompletadas] = useState(false);

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, { nome: novaTarefa, completada: false }]);
      setNovaTarefa('');
    }
  };

  const alternarConclusaoTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, completada: !tarefa.completada } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const tarefasFiltradas = filtrarCompletadas
    ? tarefas.filter(tarefa => tarefa.completada)
    : tarefas;

  return (
    <div className="app-container">
      <h2 className="app-title">Lista de Tarefas</h2>
      <div className="task-form-container">
        <input
          className="task-form-input"
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar uma nova tarefa"
        />
        <button className="task-form-button" onClick={adicionarTarefa}>Adicionar Tarefa</button>
        <button className="task-form-button" onClick={() => setFiltrarCompletadas(!filtrarCompletadas)}>
          {filtrarCompletadas ? 'Mostrar Todas as Tarefas' : 'Mostrar Tarefas Completadas'}
        </button>
      </div>
      <ul className="task-list-container">
        {tarefasFiltradas.map((tarefa, indice) => (
          <li key={indice} className="task-list-item">
            <span className={`task-item-text ${tarefa.completada ? 'completed-task' : ''}`}>
              {tarefa.nome}
            </span>
            <button className="task-item-button" onClick={() => alternarConclusaoTarefa(indice)}>
              {tarefa.completada ? 'Desmarcar' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
