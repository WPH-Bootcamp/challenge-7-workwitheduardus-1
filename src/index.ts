// TODO: Import readline untuk membaca input dari command line
import * as readline from 'readline';
// TODO: Import fungsi-fungsi dari todoService
import { addTodo,
    completeTodo,
    deleteTodo,
    displayTodos,
    listTodos,
    searchTodos,
 } from "./todoService";
// TODO: Import fungsi-fungsi dari utils (termasuk type guards)
import { isValidString } from "./utils";
import { initStorage } from './storage';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}   
// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit
function showMenu(): void {
    console.log("===== To-Do App Menu =====");
    console.log("1. Add new To-Do");
    console.log("2. Mark To-Do as complete");
    console.log("3. Delete To-Do");
    console.log("4. List all To-Dos");
    console.log("5. Search To-Dos");
    console.log("6. Exit");
    console.log("==========================");
}

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main
console.log('Welcome to TypeScript To-Do App!');
console.log('Start building your app here...');
