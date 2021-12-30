import { useState, useRef } from "react";
const ToDoList = () => {
  const [tastkList, setTaskList] = useState([]);
  const taskValue = useRef("");
  //taskValue.current.focus();

  const addTask = () => {
    var updateTaskList = [
      ...tastkList,
      { taskName: taskValue.current.value, Completed: false },
    ];
    setTaskList(updateTaskList);
    taskValue.current.value = "";
  };

  const updateTaskStatus = (taskname) => {
    let mapped = tastkList.map((task) => {
      return task.taskName == taskname
        ? { ...task, Completed: !task.Completed }
        : { ...task };
    });
    setTaskList(mapped);
  };

  const DeleteCompletedTask = () => {
    let mapped = tastkList.filter((val) => {
      return !val.Completed;
    });
    setTaskList(mapped);
  };
  return (
    <>
      <div>
        <ul>
          {tastkList.map((val, key) => {
            return (
              <span key={key} className="task___container">
                <input
                  onChange={() => updateTaskStatus(val.taskName)}
                  checked={val.Completed}
                  type="checkbox"
                />
                <li className={val.Completed ? "strick" : ""}>
                  {val.taskName}
                </li>
              </span>
            );
          })}
        </ul>
      </div>
      <div className="">
        <div>
          <input placeholder="Enter Task" ref={taskValue} type="text" />
          <button onClick={() => addTask()}>Add</button>
        </div>
        <button onClick={() => DeleteCompletedTask()}>
          Delete Completed Task
        </button>
      </div>
    </>
  );
};

export default ToDoList;
