import { useTaskStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";

export default function Column({ state }) {
  const tasks = useTaskStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow //this will rerender every time because no matter if the content is same filter will create a new array, hence use shallow
  );

  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
