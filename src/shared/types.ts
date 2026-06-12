export interface Task {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  model: string;
  status: 'active' | 'completed' | 'archived';
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  images?: ImageAttachment[];
}

export interface ImageAttachment {
  id: string;
  file: File;
  preview: string;
  size: number;
}

export interface Settings {
  theme: 'dark' | 'light';
  fontSize: number;
  apiKey: string;
  model: string;
  skills: string[];
  permissionLevel: 'standard' | 'elevated';
  workspace: string;
}

export interface WebSocketMessage {
  type: 'message' | 'status' | 'error';
  payload: any;
  taskId: string;
}