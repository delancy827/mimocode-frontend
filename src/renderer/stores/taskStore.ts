import { create } from 'zustand';
import { Task } from '../../shared/types';

interface TaskState {
  tasks: Task[];
  currentTaskId: string | null;
  addTask: (task: Task) => void;
  setCurrentTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  currentTaskId: null,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  setCurrentTask: (id) => set({ currentTaskId: id }),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id),
    currentTaskId: state.currentTaskId === id ? null : state.currentTaskId
  })),
}));
