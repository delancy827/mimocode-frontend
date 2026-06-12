import React, { useState, useRef } from 'react';
import { useChatStore } from '../../stores/chatStore';
import { useTaskStore } from '../../stores/taskStore';
import { ImageAttachment, Message } from '../../../shared/types';

export const InputArea: React.FC = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState<ImageAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addMessage, setLoading } = useChatStore();
  const { currentTaskId } = useTaskStore();

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData.items);
    items.forEach(item => {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          const attachment: ImageAttachment = {
            id: Date.now().toString(),
            file,
            preview: URL.createObjectURL(file),
            size: file.size
          };
          setImages(prev => [...prev, attachment]);
        }
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const attachment: ImageAttachment = {
          id: Date.now().toString(),
          file,
          preview: URL.createObjectURL(file),
          size: file.size
        };
        setImages(prev => [...prev, attachment]);
      }
    });
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSend = () => {
    if (!input.trim() && images.length === 0) return;
    if (!currentTaskId) return;

    const message: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      images: images.length > 0 ? images : undefined
    };

    addMessage(message);
    setInput('');
    setImages([]);
    setLoading(true);

    // TODO: Send via WebSocket
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-[var(--border-color)] p-4">
      {images.length > 0 && (
        <div className="flex gap-2 mb-2">
          {images.map(img => (
            <div key={img.id} className="relative">
              <img src={img.preview} alt="Preview" className="h-20 rounded" />
              <button
                onClick={() => removeImage(img.id)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
        >
          📎
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] p-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-color)]"
          rows={3}
        />

        <button
          onClick={handleSend}
          disabled={!input.trim() && images.length === 0}
          className="px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};