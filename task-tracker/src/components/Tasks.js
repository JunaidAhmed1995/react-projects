import Task from "./Task";

const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={props.deleteTask}
          toggleReminder={props.toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
