"use client";
import { useState } from "react";
import styles from "@/app/page.module.css";

export default function Todo() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, taskName]);
      setTaskName("");
    }
  };
  

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.grid}>
        <div className={styles.spaceY10}>
          <input
            type="text"
            name="task"
            id="task"
            value={taskName}
            onChange={handleTaskNameChange}
            placeholder="Enter a task"
            className={styles.appInput}
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          <ul className="font-normal text-xl space-y-5">
            {taskList.map((task, index) => (
              <li
                key={index}
                className={`${styles.li} bg-gray-600 text-white px-4 py-2 rounded-2xl w-[400px] flex justify-between items-center`}
              >
                <div className="inline-block w-[250px]">{task}</div>
                <span>
                  <button
                    className="bg-yellow-400 rounded-lg text-xl h-8 w-8 text-white"
                    onClick={() => handleDeleteTask(index)}
                  >
                    x
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}