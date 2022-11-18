import Image from 'next/image';
import myPhoto from '../../assets/images/my-photo.avif';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container animate__animated animate__fadeIn">
        <div className={styles.header__image}>
          <Image
            src={myPhoto}
            alt="Rail Batyrshin"
            width={100}
            height={100}
            layout="responsive"
            priority={true}
          />
        </div>
        <h1 className={styles.header__title}>Rail Batyrshin</h1>
        <h2 className={styles.header__subtitle}>
          Hello & Welcome To My Site, I&apos;m a JavaScript developer with over
          a year experience in web development at{' '}
          <a
            href="https://maddevs.io"
            className={styles['header__company-link']}
            target="_blank"
            rel="noreferrer"
          >
            MadDevs
          </a>
          . My primary areas of focus and expertise are JavaScript, TypeScript,
          React/Redux and NextJS.
          <br />
          <br />
          You can also check out my{' '}
          <a
            href="https://railbatyrshin.me/blog/"
            className={styles['header__company-link']}
            rel="noreferrer"
          >
            Blog
          </a>{' '}
          to see the articles I&apos;ve written.
        </h2>
      </div>
    </header>
  );
};

export default Header;
