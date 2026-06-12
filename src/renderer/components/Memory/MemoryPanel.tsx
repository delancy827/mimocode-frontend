import React, { useState } from 'react';
import { MemoryItem } from './MemoryItem';

interface Memory {
  id: string;
  content: string;
  type: string;
  timestamp: Date;
}

export const MemoryPanel: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [memories] = useState<Memory[]>([]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-[var(--border-color)]">
        <h3 className="text-sm font-medium text-[var(--text-primary)] mb-2">Memory Search</h3>
        <input
          type="text"
          placeholder="Search memories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-color)]"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {memories.map(memory => (
          <MemoryItem
            key={memory.id}
            id={memory.id}
            content={memory.content}
            type={memory.type}
            timestamp={memory.timestamp}
            onSelect={(id) => console.log('Select memory:', id)}
          />
        ))}
      </div>
    </div>
  );
};
