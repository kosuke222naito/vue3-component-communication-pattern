export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  priority: Priority;
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
