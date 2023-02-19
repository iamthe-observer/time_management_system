export enum TaskType {
  MyDay = 'My Day',
  Important = 'Important',
  Planned = 'Planned',
  Completed = 'Completed',
  Starred = 'Starred',
}

export default interface TasksData {
  body: string
  task_id: string | null
  urgency: 'high' | 'low'
  status: boolean
  checked: boolean
  init_date?: Date | null
  done_date?: Date | undefined | null
  type: TaskType | null
  starred: boolean
}
