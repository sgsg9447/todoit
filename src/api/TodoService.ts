import { TodoItemType } from "./types/todoItem";

export default interface TodoService {
  getAllTodoItems(): Promise<Array<TodoItemType>>;
  getDateTodoItems(date: string): Promise<Array<TodoItemType>>;
  changeTodoItem(item: TodoItemType): Promise<void>;
  deleteTodoItem(id: number): Promise<void>;
  changeDoneTodoItem(
    id: number,
    isDone: boolean,
    doneDateTime: string | undefined
  ): Promise<void>;
  createTodoItem(item: TodoItemType): Promise<TodoItemType>;
  getTodoItem(id: number): Promise<TodoItemType>;
}
