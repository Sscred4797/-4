"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./TaskManager");
const types_1 = require("./types");
const manager = new TaskManager_1.TaskManager();
// Додавання задач
console.log('Додавання задач:');
const task1 = manager.add({
    title: 'Завершити проект',
    description: 'Закінчити розробку веб-додатку',
    status: types_1.Status.InProgress,
    priority: types_1.Priority.High
});
console.log('Додано:', task1);
const task2 = manager.add({
    title: 'Купити продукти',
    description: 'Молоко, хліб, овочі',
    status: types_1.Status.Pending,
    priority: types_1.Priority.Medium
});
console.log('Додано:', task2);
const task3 = manager.add({
    title: 'Прочитати книгу',
    description: 'TypeScript Handbook',
    status: types_1.Status.Pending,
    priority: types_1.Priority.Low
});
console.log('Додано:', task3);
const task4 = manager.add({
    title: 'Зустріч з клієнтом',
    description: 'Обговорити новий контракт',
    status: types_1.Status.InProgress,
    priority: types_1.Priority.High
});
console.log('Додано:', task4);
const task5 = manager.add({
    title: 'Прогулянка',
    description: 'Вечірня прогулянка в парку',
    status: types_1.Status.Pending,
    priority: types_1.Priority.Low
});
console.log('Додано:', task5);
const task6 = manager.add({
    title: 'Ремонт велосипеда',
    description: 'Замінити ланцюг',
    status: types_1.Status.Completed,
    priority: types_1.Priority.Medium
});
console.log('Додано:', task6);
const task7 = manager.add({
    title: 'Навчання',
    description: 'Курс з React',
    status: types_1.Status.InProgress,
    priority: types_1.Priority.High
});
console.log('Додано:', task7);
const task8 = manager.add({
    title: 'Дзвінок батькам',
    description: 'Подзвонити ввечері',
    status: types_1.Status.Pending,
    priority: types_1.Priority.Medium
});
console.log('Додано:', task8);
// Всі задачі
console.log('\nВсі задачі:');
console.log(manager.getAll());
// Оновлення задачі
console.log('\nОновлення задачі:');
try {
    const updated = manager.update(task1.id, { status: types_1.Status.Completed, description: 'Закінчити розробку веб-додатку та протестувати' });
    console.log('Оновлено:', updated);
}
catch (error) {
    console.error(error.message);
}
// Видалення задачі
console.log('\nВидалення задачі:');
try {
    manager.delete(task5.id);
    console.log('Видалено задачу з id:', task5.id);
}
catch (error) {
    console.error(error.message);
}
// Фільтрація за статусом
console.log('\nЗадачі в процесі:');
console.log(manager.getByStatus(types_1.Status.InProgress));
// Фільтрація за пріоритетом
console.log('\nЗадачі з високим пріоритетом:');
console.log(manager.getByPriority(types_1.Priority.High));
// Спроба оновити неіснуючу задачу
console.log('\nСпроба оновити неіснуючу задачу:');
try {
    manager.update('nonexistent', { title: 'Test' });
}
catch (error) {
    console.error(error.message);
}
// Спроба видалити неіснуючу задачу
console.log('\nСпроба видалити неіснуючу задачу:');
try {
    manager.delete('nonexistent');
}
catch (error) {
    console.error(error.message);
}
