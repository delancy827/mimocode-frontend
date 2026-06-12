import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';

export const Toolbar: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  return (
    <div className="flex items-center gap-2 p-2 border-b border-[var(--border-color)]">
      <select
        value={settings.model}
        onChange={(e) => updateSettings({ model: e.target.value })}
        className="px-3 py-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm"
      >
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
      </select>

      <select
        value={settings.permissionLevel}
        onChange={(e) => updateSettings({ permissionLevel: e.target.value as 'standard' | 'elevated' })}
        className="px-3 py-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm"
      >
        <option value="standard">Standard</option>
        <option value="elevated">Elevated</option>
      </select>

      <input
        type="text"
        placeholder="Workspace..."
        value={settings.workspace}
        onChange={(e) => updateSettings({ workspace: e.target.value })}
        className="flex-1 px-3 py-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)]"
      />
    </div>
  );
};