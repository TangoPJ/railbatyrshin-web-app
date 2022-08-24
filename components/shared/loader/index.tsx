import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.stage}>
      <div className={styles['dot-carousel']}></div>
    </div>
  );
};
