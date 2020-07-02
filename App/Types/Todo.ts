export interface Todo {
  id: string;
  title: string;
  description: string | null;
  completed_at: Date | null;
  created_at: Date;
  updated_at: Date;
}
