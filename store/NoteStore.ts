import { create } from "zustand";
import { Data } from "@/lib/details";

interface NoteState {
  notes: Note[];
  getNoteById: (id: number) => Note | undefined;
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

export const useNoteStore = create<NoteState>((set, get) => ({
  notes: Data,
  getNoteById: (id: number) => {
    const notes = get().notes;
    return notes.find((note) => note.id === id);
  },
  addNote: (note: Note) => {
    set((state) => ({
      notes: [...state.notes, note],
    }));
  },
  updateNote: (updatedNote: Note) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === updatedNote.id ? { ...note, ...updatedNote } : note
      ),
    }));
  },
  deleteNote: (id: number) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },
}));