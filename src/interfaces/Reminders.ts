export default interface REMINDER {
  id?: string
  user_id?: string
  title: string
  body: string
  start?: string
  end: string | null
  url?: string
  created_at?: string
  data?: {}
}
