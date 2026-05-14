"use strict";
// types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = exports.Status = void 0;
exports.isTask = isTask;
exports.findById = findById;
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["InProgress"] = "in-progress";
    Status["Completed"] = "completed";
})(Status || (exports.Status = Status = {}));
var Priority;
(function (Priority) {
    Priority["Low"] = "low";
    Priority["Medium"] = "medium";
    Priority["High"] = "high";
})(Priority || (exports.Priority = Priority = {}));
function isTask(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'title' in obj &&
        'description' in obj &&
        'status' in obj &&
        'priority' in obj &&
        'createdAt' in obj &&
        typeof obj.id === 'string' &&
        typeof obj.title === 'string' &&
        typeof obj.description === 'string' &&
        Object.values(Status).includes(obj.status) &&
        Object.values(Priority).includes(obj.priority) &&
        obj.createdAt instanceof Date);
}
function findById(items, id) {
    return items.find(item => item.id === id);
}
