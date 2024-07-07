import { useMemo, useState } from "react";

import type { TaskFilterStatus, TaskItem } from "../../types";
import { ETaskStatus } from "../../types";
import { validateTodo } from "../../utils";
import { mockTodos } from "./__mocks__/mock";

const useTodoList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(mockTodos);
  const [activeFilter, setActiveFilter] = useState<TaskFilterStatus>('all');

  const filteredTasks = useMemo(() => {
    if (activeFilter === 'all') {
      return tasks;
    }

    return tasks.filter(({ status }) => status === activeFilter);
  }, [activeFilter, tasks])

  const activeTaskCount = filteredTasks.filter(({ status }) => status === ETaskStatus.Active).length;

  const handleAddTodo = (title: string) => {
    const error = validateTodo(title, tasks);

    if (!error) {
      setTasks(tasks => [...tasks, { title, status: ETaskStatus.Active }]);
    }

    return error;
  }

  const handleFilterTodos = (status: ETaskStatus) => setActiveFilter(status);

  const handleRemoveCompletedTodos = () => {
    setTasks(tasks => tasks.filter(({ status }) => status === ETaskStatus.Active))
  }

  const handleStatusChange = (title: string) => {
    setTasks((tasks) => tasks.map((task) => {
      if (task.title === title) {
        return {
          title: task.title,
          status: task.status === ETaskStatus.Active ? ETaskStatus.Completed : ETaskStatus.Active,
        }
      }

      return task;
    }));
  }

  return {
    activeTaskCount,
    filteredTasks,
    handleAddTodo,
    handleFilterTodos,
    handleRemoveCompletedTodos,
    handleStatusChange
  }
}

export default useTodoList;
