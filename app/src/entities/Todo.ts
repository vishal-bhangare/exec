interface Todo {
  _id: string;
  title: string;
  description?: string;
  status: number;
  added_on?: string;
  completed_on?: string;
  priority?: number;
  deadline?: string;
}
export default Todo;
