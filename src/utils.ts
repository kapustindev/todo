import type { ErrorObject, TaskItem } from "./types";

const createError = (message: string): ErrorObject => ({ status: 'error', message });

export const validateTodo = (title: string, tasks: TaskItem[]): ErrorObject | null => {
  if (title === '') {
    return createError('Please input your todo');
  }

  if (tasks.find((task) => task.title === title)) {
    return createError('The task has been already added');
  }

  return null;
}
