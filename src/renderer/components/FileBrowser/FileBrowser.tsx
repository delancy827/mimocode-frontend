import React, { useState } from 'react';
import { FileTree } from './FileTree';

export const FileBrowser: React.FC = () => {
  const [files] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-[var(--border-color)]">
        <input
          type="text"
          placeholder="Search files..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-color)]"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        <FileTree files={files} onFileClick={(path) => console.log('Open file:', path)} />
      </div>
    </div>
  );
};