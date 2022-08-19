export enum TaskType {
  MyDay,
  Important,
  Planned,
  Completed,
}

export default interface TasksData {
  body: string;
  task_id: string;
  urgency: string;
  status: boolean;
  checked: boolean;
  init_date: Date;
  done_date: Date;
  type: TaskType;
}
