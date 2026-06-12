import React from 'react';

interface FileItemProps {
  name: string;
  type: 'file' | 'folder';
  path: string;
  onClick: (path: string) => void;
}

export const FileItem: React.FC<FileItemProps> = ({ name, type, path, onClick }) => {
  const icon = type === 'folder' ? '📁' : '📄';
  
  return (
    <div
      className="flex items-center gap-2 px-2 py-1 hover:bg-[var(--bg-tertiary)] rounded cursor-pointer"
      onClick={() => onClick(path)}
    >
      <span>{icon}</span>
      <span className="text-[var(--text-primary)]">{name}</span>
    </div>
  );
};