// TaskManager.ts

import { Task, CreateTask, UpdateTask, Status, Priority, findById } from './types';

export class TaskManager {
  private tasks: Task[] = [];

  getAll(): Task[] {
    return this.tasks;
  }

  add(taskData: CreateTask): Task {
    const task: Task = {
      ...taskData,
      id: this.generateId(),
      createdAt: new Date()
    };
    this.tasks.push(task);
    return task;
  }

  update(id: string, updates: UpdateTask): Task {
    const task = findById(this.tasks, id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    Object.assign(task, updates);
    if (updates.status === Status.Completed && !task.completedAt) {
      task.completedAt = new Date();
    }
    return task;
  }

  delete(id: string): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      throw new Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
  }

  getByStatus(status: Status): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  getByPriority(priority: Priority): Task[] {
    return this.tasks.filter(task => task.priority === priority);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}