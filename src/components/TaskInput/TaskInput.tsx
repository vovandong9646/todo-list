import styles from './taskinput.module.scss';

export const TaskInput = () => {
  return (
    <div>
      <h1 className={styles.title}>Todo list typescript</h1>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='caption goes here'
        />
        <button type='submit'>+</button>
      </form>
    </div>
  );
};
