import { create } from 'zustand';
import { Data } from '@/lib/details';

interface NoteState {
    notes: Note[];
    addNote: (note: Note) => void;
    updateNote: (note: Note) => void;
    deleteNote: (id: number) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
    notes: Data,
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

