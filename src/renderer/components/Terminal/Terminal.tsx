import React, { useState, useRef, useEffect } from 'react';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory(prev => [...prev, `$ ${input}`]);
      // In a real implementation, this would execute the command
      setHistory(prev => [...prev, `Command executed: ${input}`]);
      setInput('');
    }
  };

  return (
    <div className="h-full flex flex-col bg-[var(--bg-primary)]">
      <div className="flex-1 overflow-y-auto p-2 font-mono text-sm">
        {history.map((line, i) => (
          <div key={i} className="text-[var(--text-primary)]">{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex border-t border-[var(--border-color)]">
        <span className="px-2 py-1 text-[var(--text-muted)]">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-2 py-1 bg-transparent text-[var(--text-primary)] focus:outline-none"
          placeholder="Enter command..."
        />
      </form>
    </div>
  );
};