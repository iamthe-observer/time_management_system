import { v4 as uuidv4 } from 'uuid'
import { TaskType } from './../interfaces/TasksData'
export interface TASKOBJECT {
  body: string
  date: undefined | Date[]
  urgency: 'low'
}

export default class TASK {
  checked: boolean
  starred: boolean
  type: TaskType
  task_id: string
  body: string
  date: undefined | Date[]
  urgency: 'low' | 'high'

  constructor(obj: TASKOBJECT) {
    this.checked = false
    this.starred = false
    this.type = TaskType.MyDay
    this.task_id = uuidv4()
    this.body = obj.body
    this.date = obj.date
    this.urgency = obj.urgency
  }

  toggleStarred() {
    this.starred = !this.starred
  }

  toggleChecked() {
    this.checked = !this.checked
  }
}
