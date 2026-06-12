import React from 'react';
import { Message } from '../../../shared/types';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isUser
            ? 'bg-[var(--primary-color)] text-white'
            : 'bg-[var(--bg-secondary)] text-[var(--text-primary)]'
        }`}
      >
        {message.images && message.images.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {message.images.map(img => (
              <img
                key={img.id}
                src={img.preview}
                alt="Attached"
                className="max-w-[200px] max-h-[150px] rounded"
              />
            ))}
          </div>
        )}
        <div className="whitespace-pre-wrap">{message.content}</div>
        <div className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};