import { FC } from "react";
import { TaskFilterStatus } from "../../types";
import { Button, Flex, Segmented } from 'antd';
import { TASK_FILTERS } from "../../constants";

type TodoListFooterProps = {
  activeTaskCount: number;
  onChange: (status: TaskFilterStatus) => void;
  onClear: () => void;
}

const TodoListFooter: FC<TodoListFooterProps> = ({ activeTaskCount, onChange, onClear }) => {
  return (
    <Flex justify="space-between" align="center">
      {activeTaskCount} items left
      <Segmented options={TASK_FILTERS} onChange={onChange} />
      <Button onClick={onClear}>Clear completed</Button>
    </Flex>
  )
};

export default TodoListFooter;
