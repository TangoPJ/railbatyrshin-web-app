import styles from './gitContent.module.scss';

export const GitContent: React.FC = () => {
  return (
    <div className={styles['git-bg']}>
      <h1 className={styles['git-bg__title']}>My Popular Repos</h1>
    </div>
  );
};
