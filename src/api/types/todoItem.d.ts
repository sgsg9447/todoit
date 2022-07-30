export type TodoItemType = {
  id?: number;
  todoContent: string;
  isDone: boolean;
  priority: number;
  dateTimes: {
    createdDateTime: string;
    doneDateTime?: string;
  };
  estimatedMins: number;
};
