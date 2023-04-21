import { v4 as uuidv4 } from 'uuid'

export default class FOLDER {
  title: string
  id: string
  tasks: string[]

  constructor(obj: { title: string; tasks: string[] }) {
    this.title = obj.title
    this.id = uuidv4()
    this.tasks = obj.tasks
  }
}
