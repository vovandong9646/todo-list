import { useState } from 'react';
import { Todo } from '../../@types/todo.type';
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
import styles from './todoList.module.scss';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const doneTodos = todos.filter((todo) => todo.done);
  const doingTodos = todos.filter((todo) => !todo.done);

  const handleAddTodo = (name: string) => {
    const newTodo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const handleInitEditValue = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setCurrentTodo(todo);
    }
  };

  const handleEditTodo = (name: string, id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    if (currentTodo) {
      currentTodo.name = name;
      setTodos((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return currentTodo as Todo;
          }
          return todo;
        });
      });
    }
    setCurrentTodo(null);
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={handleAddTodo}
          currentTodo={currentTodo}
          editTodo={handleEditTodo}
        />
        <TaskList
          handleDelete={handleDeleteTodo}
          todos={doingTodos}
          handleDone={handleDoneTodo}
          initEditValue={handleInitEditValue}
        />
        <TaskList
          initEditValue={handleInitEditValue}
          handleDelete={handleDeleteTodo}
          handleDone={handleDoneTodo}
          doneTaskList={true}
          todos={doneTodos}
        />
      </div>
    </div>
  );
};
