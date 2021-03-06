import { TodoItemType } from "./types/todoItem";

export default interface TodoService {
  getTodoItems(): Promise<Array<TodoItemType>>;
  changeTodoItem(item: TodoItemType): Promise<void>;
  deleteTodoItem(id: number): Promise<void>;
  changeDoneTodoItem(id: number, isDone: boolean): Promise<void>;
  createTodoItem(item: TodoItemType): Promise<TodoItemType>;
}
