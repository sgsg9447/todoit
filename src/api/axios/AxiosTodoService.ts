import axios from "axios";

import { TodoService } from "../TodoService";

const todoAxios = axios.create({
  baseURL: "http://localhost:8000",
});

export class AxiosTodoService implements TodoService {
  async changeTodoItem(item: any): Promise<void> {
    const response = await todoAxios.put(`/todos/${item.id}`);
  }
  async getTodoItems(): Promise<Array<any>> {
    const response = await todoAxios.get("/todos");
    return response.data;
  }
}

/*
 async patch(id, data) {
    await this.service.patch(`/${id}`, data);
  }
*/
