import axios from "axios";

import TodoService from "../TodoService";
import { TodoItemType } from "../types/todoItem";
import dayjs from "dayjs";

const todoAxios = axios.create({
  baseURL: "http://localhost:8000",
});

export class AxiosTodoService implements TodoService {
  async createTodoItem(item: TodoItemType): Promise<TodoItemType> {
    item.id = dayjs().valueOf();
    const response = await todoAxios.post(`/todos`, item);
    return response.data;
  }
  async deleteTodoItem(id: number): Promise<void> {
    await todoAxios.delete(`/todos/${id}`);
  }
  async changeDoneTodoItem(id: number, isDone: boolean): Promise<void> {
    await todoAxios.patch(`/todos/${id}`, { isDone });
  }
  async changeTodoItem(item: TodoItemType): Promise<void> {
    await todoAxios.put(`/todos/${item.id}`, item);
  }
  async getTodoItems(): Promise<Array<TodoItemType>> {
    const response = await todoAxios.get("/todos");
    return response.data;
  }
}

/*
 async patch(id, data) {
    await this.service.patch(`/${id}`, data);
  }
*/
