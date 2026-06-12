import React, { useState, useEffect } from 'react';

interface Command {
  id: string;
  label: string;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: Command[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  commands
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50">
      <div className="bg-[var(--bg-secondary)] rounded-lg w-[500px] overflow-hidden shadow-2xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command..."
          className="w-full px-4 py-3 bg-transparent border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          autoFocus
        />
        
        <div className="max-h-[300px] overflow-y-auto">
          {filteredCommands.map((cmd, index) => (
            <div
              key={cmd.id}
              className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
                index === selectedIndex
                  ? 'bg-[var(--bg-tertiary)]'
                  : 'hover:bg-[var(--bg-tertiary)]'
              }`}
              onClick={() => {
                cmd.action();
                onClose();
              }}
            >
              <span className="text-[var(--text-primary)]">{cmd.label}</span>
              {cmd.shortcut && (
                <span className="text-xs text-[var(--text-muted)]">{cmd.shortcut}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
