import React, { useState } from "react";
import InsetList from "./InsetList";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";

const FORMAT = "dd/MM/yyyy";
const AddTask = ({ addTask, setShowAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);
  console.log(date);
  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }

  // function parseDate(str, format, locale) {
  //   const parsed = dateFnsParse(str, format, new Date(), { locale });
  //   if (DateUtils.isDate(parsed)) {
  //     return parsed;
  //   }
  //   return undefined;
  // }
  return (
    <div className="add-task-dialog">
      <input
        value={task}
        type="text"
        onChange={(event) => setTask(event.target.value)}
      />
      <div className="add-task-action-container">
        <div className="btns-container">
          <button
            className="add-btn"
            onClick={() => {
              if (task != "") {
                addTask(task, date);
              }
              setTask("");
              setShowAddTask(false);
            }}
          >
            Addd Task
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              setShowAddTask(false);
              setTask("");
            }}
          >
            Cancel
          </button>
        </div>
        <div className="icon-container">
          <DayPickerInput
            format={FORMAT}
            formatDate={formatDate}
            onDayChange={(day) => {
              setDate(day);
              // setDate(dateFnsFormat(new Date(date), FORMAT));
              console.log("here" + day);
            }}
            format={FORMAT}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            dayPickerProps={{
              modifiers: {
                disabled: [{ before: new Date() }],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

function Tasks({ selectedTab }) {
  const taskHeaderMapping = {
    inbox: "Inbox",
    today: "Today",
    next_7: "Next 7 Days",
  };
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const addTask = (task, date) => {
    const newTaskItem = { task, date: date || new Date() };
    setTasks([...tasks, newTaskItem]);
  };
  console.log(tasks);
  return (
    <div className="tasks">
      <h1>{taskHeaderMapping[selectedTab]}</h1>
      <div
        className="add-task-btn"
        onClick={() => {
          setShowAddTask(!showAddTask);
        }}
      >
        <span className="plus">+</span>
        <span className="add-task-text">Add Task</span>
      </div>
      {showAddTask && (
        <AddTask addTask={addTask} setShowAddTask={setShowAddTask} />
      )}

      {tasks.length == 0 ? (
        <p>"*No list added*"</p>
      ) : (
        <InsetList tasks={tasks} selectedTab={selectedTab} />
      )}
    </div>
  );
}

export default Tasks;
