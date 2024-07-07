import { List, Typography } from "antd";

import Task from "../TaskItem";
import TodoListFooter from "../TodoListFooter";
import AddTodo from "../AddTodo";
import useTodoList from "./functions";

const TodoList = () => {
  const {
    activeTaskCount,
    filteredTasks,
    handleAddTodo,
    handleFilterTodos,
    handleRemoveCompletedTodos,
    handleStatusChange
  } = useTodoList();

  return (
    <List
      style={{ width: '500px', backgroundColor: '#f5f5f5' }}
      header={<>
        <Typography.Title style={{ textAlign: 'center' }}>TODO List</Typography.Title>
        <AddTodo onAdd={handleAddTodo} />
      </>}
      footer={
        <TodoListFooter
          activeTaskCount={activeTaskCount}
          onChange={handleFilterTodos}
          onClear={handleRemoveCompletedTodos}
        />
      }
      bordered
      dataSource={filteredTasks}
      renderItem={(item) => <Task {...item} onChange={handleStatusChange}/>}
    />
  );
}

export default TodoList;
