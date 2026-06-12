import React from 'react';
import { Toolbar } from './Toolbar';
import { MessageList } from './MessageList';
import { InputArea } from './InputArea';

export const ChatArea: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <Toolbar />
      <MessageList />
      <InputArea />
    </div>
  );
};