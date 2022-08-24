import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  getInfoFromGit,
  GITHUB_INFO,
  USER,
} from '../../../api/getInfoFromGithub';
import Fork from '../../../assets/images/svg/fork.svg';
import Star from '../../../assets/images/svg/star.svg';
import styles from './gitContent.module.scss';

export const GitContent: React.FC = () => {
  const [repos, setRepos] = useState<Array<GITHUB_INFO>>([]);

  useEffect(() => {
    const urls = [
      { user: 'fakng-agrgtr', repository: 'fakng-ui' },
      { user: 'TangoPJ', repository: 'railbatyrshin-web-app' },
      { user: 'maddevsio', repository: 'maddevs' },
      { user: 'maddevsio', repository: 'mad-radiator' },
    ];
    const fetchData = async (urls: Array<USER>) => {
      const repositories = await getInfoFromGit(urls);
      setRepos(repositories);
    };
    fetchData(urls);
  }, []);

  return (
    <section className={styles['git-bg']}>
      <div className="container">
        <h1
          className={`${styles['git-bg__title']} animate__animated animate__fadeInUp`}
        >
          Repositories I&apos;m working on
        </h1>
        <div className={styles.cards}>
          {repos.map((repo) => {
            return (
              <div
                className={`${styles.cards__card} animate__animated animate__fadeInUp`}
                key={repo.name}
              >
                <div>
                  <p className={styles['cards__card-title']}>{repo.name}</p>
                  <div className={styles['cards__card-subtitle']}>
                    <span className={styles['cards__card-icon']}>
                      <Image src={Star} alt="Star" width={25} height={25} />
                    </span>
                    <span className={styles['cards__card-text']}>
                      {repo.stars}
                    </span>
                    <span className={styles['cards__card-icon']}>
                      <Image src={Fork} alt="Fork" width={20} height={20} />
                    </span>
                    <span className={styles['cards__card-text']}>
                      {repo.forks}
                    </span>
                  </div>
                  <p className={styles['cards__card-description']}>
                    {repo.description ? repo.description : 'No description'}
                  </p>
                </div>
                <div className={styles['cards__card-footer']}>
                  <hr className={styles['cards__card-line']} />
                  <Link href={repo.url}>
                    <a
                      target="_blank"
                      className={styles['cards__card-footer--link']}
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
