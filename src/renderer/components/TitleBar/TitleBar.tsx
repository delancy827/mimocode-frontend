import React from 'react';

export const TitleBar: React.FC = () => {
  return (
    <div className="h-10 bg-[var(--bg-secondary)] flex items-center justify-between px-4 border-b border-[var(--border-color)]">
      <div className="text-sm font-medium text-[var(--text-primary)]">MiMoCode</div>
      <div className="flex gap-2">
        <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400" />
        <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400" />
        <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400" />
      </div>
    </div>
  );
};
