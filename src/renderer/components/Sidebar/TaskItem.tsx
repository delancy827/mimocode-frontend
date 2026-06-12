import React from 'react';
import { Task } from '../../../shared/types';
import { useTaskStore } from '../../stores/taskStore';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { currentTaskId, setCurrentTask } = useTaskStore();
  const isActive = currentTaskId === task.id;

  return (
    <div
      className={`p-3 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-[var(--bg-tertiary)]' : 'hover:bg-[var(--bg-secondary)]'
      }`}
      onClick={() => setCurrentTask(task.id)}
    >
      <div className="font-medium text-[var(--text-primary)] truncate">
        {task.title}
      </div>
      <div className="text-sm text-[var(--text-muted)] truncate mt-1">
        {task.lastMessage}
      </div>
      <div className="text-xs text-[var(--text-muted)] mt-1">
        {new Date(task.timestamp).toLocaleDateString()}
      </div>
    </div>
  );
};
