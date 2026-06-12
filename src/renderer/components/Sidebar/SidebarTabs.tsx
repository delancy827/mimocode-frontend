import React from 'react';

interface SidebarTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'tasks', label: '📋 Tasks' },
  { id: 'files', label: '📁 Files' },
  { id: 'memory', label: '🧠 Memory' }
];

export const SidebarTabs: React.FC<SidebarTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-[var(--border-color)]">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-3 py-2 text-sm transition-colors ${
            activeTab === tab.id
              ? 'bg-[var(--bg-tertiary)] text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
