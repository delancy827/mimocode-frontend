import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useSettingsStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[var(--bg-secondary)] rounded-lg w-[500px] max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Settings</h2>
          <button
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            ×
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => updateSettings({ theme: e.target.value as 'dark' | 'light' })}
              className="w-full px-3 py-2 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)]"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">Font Size</label>
            <input
              type="number"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
              className="w-full px-3 py-2 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-1">API Key</label>
            <input
              type="password"
              value={settings.apiKey}
              onChange={(e) => updateSettings({ apiKey: e.target.value })}
              className="w-full px-3 py-2 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)]"
            />
          </div>
        </div>

        <div className="p-4 border-t border-[var(--border-color)] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
