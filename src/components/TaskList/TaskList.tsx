import { Todo } from './../../@types/todo.type';
import styles from './tasklist.module.scss';

interface TaskListProps {
  doneTaskList?: boolean;
  todos: Todo[];
  handleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
  initEditValue: (id: string) => void;
}

export const TaskList = (props: TaskListProps) => {
  const { doneTaskList, todos, handleDone, handleDelete, initEditValue } = props;

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Finish' : 'Doing'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div
            className={styles.task}
            key={todo.id}
          >
            <div className={styles.taskContent}>
              <input
                type='checkbox'
                onClick={() => handleDone(todo.id, !doneTaskList)}
              />
              <span className={`${styles.taskName} ${doneTaskList ? styles.taskNameDone : ''}`}>{todo.name}</span>
            </div>
            <div className={styles.taskActions}>
              <button onClick={() => initEditValue(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
