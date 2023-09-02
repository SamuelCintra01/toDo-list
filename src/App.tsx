import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "Estudar",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  );
}
