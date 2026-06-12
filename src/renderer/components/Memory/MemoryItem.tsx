import React from 'react';

interface MemoryItemProps {
  id: string;
  content: string;
  type: string;
  timestamp: Date;
  onSelect: (id: string) => void;
}

export const MemoryItem: React.FC<MemoryItemProps> = ({
  id,
  content,
  type,
  timestamp,
  onSelect
}) => {
  return (
    <div
      className="p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] cursor-pointer transition-colors"
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
          {type}
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          {new Date(timestamp).toLocaleDateString()}
        </span>
      </div>
      <div className="text-sm text-[var(--text-primary)] line-clamp-2">
        {content}
      </div>
    </div>
  );
};
