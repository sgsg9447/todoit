import { AxiosTodoService } from "./axios/AxiosTodoService";
import TodoService from "./TodoService";

export const todoService: TodoService = new AxiosTodoService();
