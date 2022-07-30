import axios from "axios";

import TodoService from "../TodoService";
import { TodoItemType } from "../types/todoItem";
import dayjs from "dayjs";

const todoAxios = axios.create({
  baseURL: "http://localhost:8000",
});

export class AxiosTodoService implements TodoService {
  async getTodoItem(id: number): Promise<TodoItemType> {
    const response = await todoAxios.get(`/todos/${id}`);
    return response.data;
  }
  async getAllTodoItems(): Promise<Array<TodoItemType>> {
    const response = await todoAxios.get("/todos");
    return response.data;
  }
  async getDateTodoItems(date: string): Promise<Array<TodoItemType>> {
    const day = dayjs(date);
    const startDate = day.format("YYYY-MM-DD");
    const endDate = day.add(1, "day").format("YYYY-MM-DD");
    const response = await todoAxios.get(
      `/todos?dateTimes.createdDateTime_gte=${startDate}&dateTimes.createdDateTime_lte=${endDate}`
    );
    // ?dateTimes.createdDateTime_gte=2022-07-23T00:00:00
    return response.data;
  }
  async createTodoItem(item: TodoItemType): Promise<TodoItemType> {
    item.id = dayjs().valueOf();
    const response = await todoAxios.post(`/todos`, item);
    return response.data;
  }
  async deleteTodoItem(id: number): Promise<void> {
    await todoAxios.delete(`/todos/${id}`);
  }
  async changeDoneTodoItem(id: number, isDone: boolean): Promise<void> {
    const doneDateTime = isDone ? dayjs().format() : null;
    const todoItem = await this.getTodoItem(id);
    //put 을 할때 todoItem에 isDone 상태에 따라 Donedatetime과 함께 다같이 업데이트 해주면됨
    await todoAxios.put(`/todos/${id}`, {
      ...todoItem,
      isDone,
      dateTimes: { ...todoItem.dateTimes, doneDateTime },
    });
  }
  async changeTodoItem(item: TodoItemType): Promise<void> {
    await todoAxios.put(`/todos/${item.id}`, item);
  }
}

/*
 async patch(id, data) {
    await this.service.patch(`/${id}`, data);
  }
*/
