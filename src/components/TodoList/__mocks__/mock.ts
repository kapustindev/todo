import type { TaskItem } from "../../../types";
import { ETaskStatus } from "../../../types";

export const mockTodos: TaskItem[] = [
  { status: ETaskStatus.Completed, title: 'Do tests' },
  { status: ETaskStatus.Active, title: 'Do test task' },
  { status: ETaskStatus.Active, title: 'Write beautiful code' },
]
