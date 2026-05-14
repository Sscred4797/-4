// index.ts

import { TaskManager } from './TaskManager';
import { Status, Priority } from './types';

const manager = new TaskManager();

// Додавання задач
console.log('Додавання задач:');
const task1 = manager.add({
  title: 'Завершити проект',
  description: 'Закінчити розробку веб-додатку',
  status: Status.InProgress,
  priority: Priority.High
});
console.log('Додано:', task1);

const task2 = manager.add({
  title: 'Купити продукти',
  description: 'Молоко, хліб, овочі',
  status: Status.Pending,
  priority: Priority.Medium
});
console.log('Додано:', task2);

const task3 = manager.add({
  title: 'Прочитати книгу',
  description: 'TypeScript Handbook',
  status: Status.Pending,
  priority: Priority.Low
});
console.log('Додано:', task3);

const task4 = manager.add({
  title: 'Зустріч з клієнтом',
  description: 'Обговорити новий контракт',
  status: Status.InProgress,
  priority: Priority.High
});
console.log('Додано:', task4);

const task5 = manager.add({
  title: 'Прогулянка',
  description: 'Вечірня прогулянка в парку',
  status: Status.Pending,
  priority: Priority.Low
});
console.log('Додано:', task5);

const task6 = manager.add({
  title: 'Ремонт велосипеда',
  description: 'Замінити ланцюг',
  status: Status.Completed,
  priority: Priority.Medium
});
console.log('Додано:', task6);

const task7 = manager.add({
  title: 'Навчання',
  description: 'Курс з React',
  status: Status.InProgress,
  priority: Priority.High
});
console.log('Додано:', task7);

const task8 = manager.add({
  title: 'Дзвінок батькам',
  description: 'Подзвонити ввечері',
  status: Status.Pending,
  priority: Priority.Medium
});
console.log('Додано:', task8);

// Всі задачі
console.log('\nВсі задачі:');
console.log(manager.getAll());

// Оновлення задачі
console.log('\nОновлення задачі:');
try {
  const updated = manager.update(task1.id, { status: Status.Completed, description: 'Закінчити розробку веб-додатку та протестувати' });
  console.log('Оновлено:', updated);
} catch (error) {
  console.error((error as Error).message);
}

// Видалення задачі
console.log('\nВидалення задачі:');
try {
  manager.delete(task5.id);
  console.log('Видалено задачу з id:', task5.id);
} catch (error) {
  console.error((error as Error).message);
}

// Фільтрація за статусом
console.log('\nЗадачі в процесі:');
console.log(manager.getByStatus(Status.InProgress));

// Фільтрація за пріоритетом
console.log('\nЗадачі з високим пріоритетом:');
console.log(manager.getByPriority(Priority.High));

// Спроба оновити неіснуючу задачу
console.log('\nСпроба оновити неіснуючу задачу:');
try {
  manager.update('nonexistent', { title: 'Test' });
} catch (error) {
  console.error((error as Error).message);
}

// Спроба видалити неіснуючу задачу
console.log('\nСпроба видалити неіснуючу задачу:');
try {
  manager.delete('nonexistent');
} catch (error) {
  console.error((error as Error).message);
}