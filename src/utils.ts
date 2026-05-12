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

export function isTodoStatus(data: unknown): data is Todo[] {
    if (!Array.isArray(data)) {
        return false;
    }

    return data.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
