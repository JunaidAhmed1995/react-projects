import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div
      onDoubleClick={() => props.toggleReminder(props.task.id)}
      className={`task ${
        props.task.reminder ? "reminder-active" : "reminder-inactive"
      }`}
    >
      <h3>
        {props.task.text}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => props.deleteTask(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};

export default Task;
