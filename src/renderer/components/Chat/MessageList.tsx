import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../../stores/chatStore';
import { MessageItem } from './MessageItem';

export const MessageList: React.FC = () => {
  const { messages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-[var(--text-muted)]">
          Start a conversation...
        </div>
      ) : (
        messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};