import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
import styles from './todoList.module.scss';

export const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  );
};
