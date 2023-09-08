import todoLogo from "../../assets/Logo.png";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { FormEvent, useState } from "react";

interface Prosps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Prosps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
