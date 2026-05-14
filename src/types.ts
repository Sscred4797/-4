// types.ts

export enum Status {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed'
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  createdAt: Date;
  completedAt?: Date;
}

export type CreateTask = Omit<Task, 'id' | 'createdAt' | 'completedAt'>;

export type UpdateTask = Partial<Pick<Task, 'title' | 'description' | 'status' | 'priority' | 'completedAt'>>;

export function isTask(obj: unknown): obj is Task {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj &&
    'description' in obj &&
    'status' in obj &&
    'priority' in obj &&
    'createdAt' in obj &&
    typeof (obj as Task).id === 'string' &&
    typeof (obj as Task).title === 'string' &&
    typeof (obj as Task).description === 'string' &&
    Object.values(Status).includes((obj as Task).status) &&
    Object.values(Priority).includes((obj as Task).priority) &&
    (obj as Task).createdAt instanceof Date
  );
}

export function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}