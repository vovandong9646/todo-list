import { useEffect, useState } from 'react';
import { Todo } from '../../@types/todo.type';
import styles from './taskinput.module.scss';

interface TaskInputProps {
  addTodo: (name: string) => void;
  currentTodo: Todo | null;
  editTodo: (name: string, id: string) => void;
}

export const TaskInput = (props: TaskInputProps) => {
  const { addTodo, currentTodo, editTodo } = props;
  const [name, setName] = useState<string>('');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTodo) {
      editTodo(name, currentTodo?.id);
    } else {
      addTodo(name);
    }
    setName('');
  };

  useEffect(() => {
    if (currentTodo?.id) {
      setName(currentTodo.name);
    }
  }, [currentTodo?.name]);

  return (
    <div>
      <h1 className={styles.title}>Todo list</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          value={name}
          type='text'
          placeholder='caption goes here'
          onChange={onHandleChange}
        />
        <button type='submit'>+</button>
      </form>
    </div>
  );
};
