import { TaskType } from '../interfaces/TasksData'
import TasksData from '../interfaces/TasksData'
import { v4 as uuidv4 } from 'uuid'

export class Task {
  // readonly name: string;
  // public age: number;
  // private dob: Date;

  constructor(
    public data: TasksData,
    public urgency?: string,
    public date?: Date,
    public body?: string
  ) {
    this.data = {
      body: null,
      checked: false,
      starred: false,
      init_date: new Date(),
      status: false,
      done_date: null,
      task_id: uuidv4(),
      type: TaskType.MyDay,
      urgency: 'low',
    }
  }

  editBody(new_body: string) {
    this.data!.body = this.body!
  }
}
