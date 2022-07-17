export default interface TodoService {
  getTodoItems(): Promise<Array<any>>;
  changeTodoItem(item: any): Promise<void>;
}
