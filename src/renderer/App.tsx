import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ChatArea } from './components/Chat/ChatArea';
import { TitleBar } from './components/TitleBar/TitleBar';
import { SettingsPanel } from './components/Settings/SettingsPanel';

const App: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-primary)]">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSettingsClick={() => setSettingsOpen(true)} />
        <ChatArea />
      </div>
      <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default App;
