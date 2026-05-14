# Task Manager TypeScript

A console-based task manager application built with TypeScript, demonstrating advanced typing features.

## Features

- **Task Management**: Add, update, delete, and retrieve tasks
- **Filtering**: Search tasks by status or priority
- **Type Safety**: Full TypeScript typing with interfaces, enums, generics, and type guards
- **Error Handling**: Proper error handling for invalid operations

## Project Structure

- `src/types.ts`: Type definitions, enums, interfaces, and utility functions
- `src/TaskManager.ts`: Main TaskManager class with all operations
- `src/index.ts`: Demonstration script showing all features

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the application:
   ```bash
   npm start
   ```

## TypeScript Features Used

- **Interfaces**: `Task`, `CreateTask`, `UpdateTask`
- **Enums**: `Status`, `Priority`
- **Generics**: `findById<T>`
- **Utility Types**: `Omit`, `Pick`, `Partial`
- **Type Guards**: `isTask`
- **Union Types**: Status and Priority enums

## Demonstration

The application demonstrates:
- Adding 8 test tasks
- Updating a task (with automatic completion date setting)
- Deleting a task
- Filtering by status and priority
- Error handling for non-existent tasks