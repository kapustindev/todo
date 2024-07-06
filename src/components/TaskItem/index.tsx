import { FC } from "react";
import { ETaskStatus, TaskItem } from "../../types";
import { Checkbox, List } from "antd";

type TaskProps = TaskItem & { onChange: (title: string) => void };

const Task: FC<TaskProps> = ({ title, status, onChange }) => {
  const isCompleted = status === ETaskStatus.Completed;

  return (
    <List.Item>
      <Checkbox onChange={() => onChange(title)} checked={isCompleted}>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</span>
      </Checkbox>
    </List.Item>
  );
};

export default Task;
