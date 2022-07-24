export type TodoItemType = {
  id?: number;
  todoContent: string;
  isDone: bo;
  priority: number;
  dateTimes: {
    createdDateTime: string;
    doneDateTime?: string;
  };
  estimatedMins: number;
};
