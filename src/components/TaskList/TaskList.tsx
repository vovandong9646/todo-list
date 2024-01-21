import styles from './tasklist.module.scss';

interface TaskListProps {
  doneTaskList?: boolean;
}

export const TaskList = (props: TaskListProps) => {
  const { doneTaskList } = props;
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Finish' : 'Doing'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <div className={styles.taskContent}>
            <input type='checkbox' />
            <span className={styles.taskName}>Học bài</span>
          </div>
          <div className={styles.taskActions}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>

        <div className={styles.task}>
          <div className={styles.taskContent}>
            <input type='checkbox' />
            <span className={`${styles.taskName} ${styles.taskNameDone}`}>Học bài</span>
          </div>
          <div className={styles.taskActions}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
