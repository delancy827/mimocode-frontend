import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ChatArea } from './components/Chat/ChatArea';
import { TitleBar } from './components/TitleBar/TitleBar';
import { SettingsPanel } from './components/Settings/SettingsPanel';
import { CommandPalette } from './components/CommandPalette/CommandPalette';
import { Terminal } from './components/Terminal/Terminal';

const App: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const commands = [
    { id: 'new-task', label: 'New Task', shortcut: 'Ctrl+T', action: () => {} },
    { id: 'settings', label: 'Open Settings', shortcut: 'Ctrl+,', action: () => setSettingsOpen(true) },
    { id: 'terminal', label: 'Toggle Terminal', shortcut: 'Ctrl+`', action: () => setTerminalOpen(!terminalOpen) },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.ctrlKey && e.key === ',') {
        e.preventDefault();
        setSettingsOpen(true);
      }
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-primary)]">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSettingsClick={() => setSettingsOpen(true)} />
        <div className="flex-1 flex flex-col">
          <ChatArea />
          {terminalOpen && (
            <div className="h-64 border-t border-[var(--border-color)]">
              <Terminal />
            </div>
          )}
        </div>
      </div>
      <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
      />
    </div>
  );
};

export default App;