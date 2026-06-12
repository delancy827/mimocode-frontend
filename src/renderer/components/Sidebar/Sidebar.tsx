import React from 'react';
import { useTaskStore } from '../../stores/taskStore';
import { TaskList } from './TaskList';

interface SidebarProps {
  onSettingsClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSettingsClick }) => {
  const { addTask } = useTaskStore();

  const handleNewTask = () => {
    const newTask = {
      id: Date.now().toString(),
      title: 'New Task',
      lastMessage: '',
      timestamp: new Date(),
      model: 'gpt-4',
      status: 'active' as const
    };
    addTask(newTask);
  };

  return (
    <div className="w-70 h-full bg-[var(--bg-secondary)] border-r border-[var(--border-color)] flex flex-col">
      <div className="p-3 border-b border-[var(--border-color)]">
        <button
          onClick={handleNewTask}
          className="w-full px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white rounded-lg transition-colors"
        >
          + New Task
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <TaskList />
      </div>
      <div className="p-3 border-t border-[var(--border-color)]">
        <button
          onClick={onSettingsClick}
          className="w-full px-4 py-2 bg-[var(--bg-tertiary)] hover:bg-[var(--border-hover)] text-[var(--text-primary)] rounded-lg transition-colors"
        >
          ⚙ Settings
        </button>
      </div>
    </div>
  );
};
