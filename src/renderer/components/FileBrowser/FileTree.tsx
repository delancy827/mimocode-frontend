import React from 'react';
import { FileItem } from './FileItem';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileTreeProps {
  files: FileNode[];
  onFileClick: (path: string) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({ files, onFileClick }) => {
  return (
    <div className="space-y-1">
      {files.map(file => (
        <FileItem
          key={file.path}
          name={file.name}
          type={file.type}
          path={file.path}
          onClick={onFileClick}
        />
      ))}
    </div>
  );
};