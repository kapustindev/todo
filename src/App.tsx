import { Flex } from "antd";
import TodoList from "./components/TodoList";

const App = () => (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Flex>
        <TodoList />
      </Flex>
    </Flex>
);

export default App;
