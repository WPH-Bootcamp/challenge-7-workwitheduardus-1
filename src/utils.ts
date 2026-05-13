// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime
import { Todo, TodoStatus } from "./types";

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
export function isTodo(obj: unknown): obj is Todo {
        if(typeof obj !== "object" || obj === null) {
            return false;
    }

    const candidate = obj as Record<string, unknown>;
    return (
        typeof candidate.id === "number" &&
        typeof candidate.text === "string" &&
        (candidate.status === "active" || candidate.status === "done") && 
        typeof candidate.createdAt === "string"
    );
}

export function isTodoArray(data: unknown): data is Todo[] {
    if (!Array.isArray(data)) {
        return false;
    }

    return data.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
export function isValidString(input: unknown):
input is string {
    return typeof input === "string" && input.trim().length > 0;}