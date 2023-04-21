import TasksData from '../interfaces/TasksData'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from '../interfaces/TasksData'
import { ref } from 'vue'

export const tasks = ref<TasksData[] | null>([
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noonLorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus neque ab earum asperiores maxime laudantium obcaecati cumque nemo error.',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
  {
    task_id: uuidv4(),
    body: 'dry clean clothes before noon',
    date: [new Date(), new Date()],
    urgency: 'high',
    type: TaskType.MyDay,
    checked: false,
    starred: false,
  },
])
