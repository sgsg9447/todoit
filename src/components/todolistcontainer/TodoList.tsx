import React from "react";
import TodoListView from "./TodoListView";

type Props = {};

const TodoList = (props: Props) => {
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   todoService.getTodoItems().then((data: any) => {
  //     setItem(data);
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log(item);
  // }, [item]);
  return <TodoListView />;
};

export default TodoList;
