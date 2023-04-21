export enum TaskType {
  MyDay = 'My Day',
  Important = 'Important',
  Planned = 'Planned',
  Completed = 'Completed',
  Starred = 'Starred',
}

export interface FOLDER {
  tasks: string[]
  title: string
  id: string
}

export default interface TasksData {
  body: string
  task_id: string | null
  urgency: 'high' | 'low'
  checked: boolean
  date?: undefined | null | Date[]
  type: TaskType | null
  user_folder?: FOLDER | string
  starred: boolean
}
