import { Input, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { ErrorObject } from "../../types";

const AddTodo = ({ onAdd }: { onAdd: (title: string) => ErrorObject | null }) => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [error, setError] = useState<ErrorObject | null>(null);

  const handleAddTodo = () => {
    const error = onAdd(todoTitle);
    if (!error) {
      setTodoTitle('');
    }
    setError(error);
  }

  const handleSetTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setTodoTitle(e.target.value);
  };

  return (
    <>
      <Input
        status={error?.status}
        value={todoTitle}
        placeholder="Add TODO"
        onChange={handleSetTodoTitle}
        onPressEnter={handleAddTodo}
      />
      {error && <Typography.Text type="danger">{error.message}</Typography.Text>}
    </>
  )
}

export default AddTodo;
