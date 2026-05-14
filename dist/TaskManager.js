"use strict";
// TaskManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const types_1 = require("./types");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    getAll() {
        return this.tasks;
    }
    add(taskData) {
        const task = {
            ...taskData,
            id: this.generateId(),
            createdAt: new Date()
        };
        this.tasks.push(task);
        return task;
    }
    update(id, updates) {
        const task = (0, types_1.findById)(this.tasks, id);
        if (!task) {
            throw new Error(`Task with id ${id} not found`);
        }
        Object.assign(task, updates);
        if (updates.status === types_1.Status.Completed && !task.completedAt) {
            task.completedAt = new Date();
        }
        return task;
    }
    delete(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new Error(`Task with id ${id} not found`);
        }
        this.tasks.splice(index, 1);
    }
    getByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    getByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
}
exports.TaskManager = TaskManager;
