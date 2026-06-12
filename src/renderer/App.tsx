import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ChatArea } from './components/Chat/ChatArea';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-[var(--bg-primary)]">
      <Sidebar />
      <ChatArea />
    </div>
  );
};

export default App;
