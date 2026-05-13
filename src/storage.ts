import * as fs from 'fs';
import * as path from 'path';
import { Todo } from './types';
import { isTodoArray } from './utils';

// TODO: Definisikan path file untuk menyimpan data To-Do
const DATA_DIR = path.join(".", "data");
const DATA_FILE = path.join(DATA_DIR, "todos.json");

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
export function loadTodos(): Todo[] {
    try {
        const raw = fs.readFileSync(DATA_FILE, "utf-8");
        const parsed: unknown = JSON.parse(raw);
        if (isTodoArray(parsed)) {
            return parsed;
        }

        console.log("Data pada file rusak, mulai dengan daftar kosong.");
        return [];
    } catch (error) {
        return [];
    }
}
// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
export function saveTodos(todos: Todo[]): void {
    try {
        const json = JSON.stringify(todos, null, 2);
        fs.writeFileSync(DATA_FILE, json, "utf-8");
    }
    catch (error) {
        console.error("Gagal menyimpan data", error);
    }
}
        
// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
export function initStorage(): void {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, {recursive: true});
    }


if (!fs.existsSync(DATA_FILE)) {
    saveTodos([]);
    }
}
