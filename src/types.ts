// TODO: Definisikan tipe data untuk To-Do item di sini
// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item
export interface Todo {
  id: number;
  text: string;
  status: TodoStatus;
  createdAt: string;
}
// TODO: Buat tipe untuk status To-Do (active/done)
export type TodoStatus = "active" | "done";

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan
export type AddTodoFunction = (text: string) => Todo;
export type CompleteToDoFunction = (id: number) => Todo | null;
export type DeleteTodoFunction = (id: number) => boolean;
export type ListTodosFunction = () => Todo[];
export type SearchTodosFunction = (keyword: string) => Todo[];