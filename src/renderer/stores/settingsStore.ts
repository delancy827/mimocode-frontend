import { create } from 'zustand';
import { Settings } from '../../shared/types';

interface SettingsState {
  settings: Settings;
  updateSettings: (partial: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  theme: 'dark',
  fontSize: 14,
  apiKey: '',
  model: 'gpt-4',
  skills: [],
  permissionLevel: 'standard',
  workspace: ''
};

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: defaultSettings,
  updateSettings: (partial) => set((state) => ({
    settings: { ...state.settings, ...partial }
  })),
}));
