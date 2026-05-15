// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts
import { Todo } from './types';

// TODO: Import fungsi storage untuk baca/tulis file
import { loadTodos, saveTodos } from './storage';

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active
export function addTodo(text: string): Todo {
    const todos = loadTodos();
    const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
        status: "active",
        createdAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    saveTodos(todos);
    return newTodo;
}

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan
export function completeTodo(id: number): Todo | null {
    const todos = loadTodos();
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return null;
    }
    todo.status = "done";
    saveTodos(todos);
    return todo;
}

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan
export function deleteTodo(id: number): boolean {
    const todos = loadTodos();
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return false;
    }
    todos.splice(index, 1);
    saveTodos(todos);
    return true;
}

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih
export function listTodos(): Todo[] {
    return loadTodos();
}

export function displayTodos(): void {
    const todos = listTodos();
    if (todos.length === 0) {
        console.log("To-Do Belum ada.");
        return;
    }

    console.log("--- Daftar To-Do ---");
    todos.forEach((todo, index) => {
        const status = todo.status === "done" ? "[DONE]" : "[ACTIVE]";
        console.log(`${status} ${index + 1}. ${todo.text}`);
    });
    console.log("-------------------");
}
// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword
export function searchTodos(keyword: string): Todo[] {
    const todos = loadTodos();
    const lower = keyword.toLowerCase();
    return todos.filter(t => t.text.toLowerCase().includes(lower));
}