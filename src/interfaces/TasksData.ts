export enum TaskType {
  MyDay = 'My Day',
  Important = 'Important',
  Planned = 'Planned',
  Completed = 'Completed',
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
