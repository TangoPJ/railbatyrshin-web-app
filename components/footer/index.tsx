import Image from 'next/image';
import Github from '../../assets/images/svg/github-icon.svg';
import Linkedin from '../../assets/images/svg/linkedin-icon.svg';
import Twitter from '../../assets/images/svg/twitter-icon.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__inner-card']}>
        <a
          href="https://github.com/TangoPJ"
          className={styles['footer__icon']}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Github} alt="Github" width={36} height={36} />
        </a>
        <a
          href="#"
          className={styles['footer__icon']}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Twitter} alt="Twitter" width={36} height={36} />
        </a>
        <a
          href="https://www.linkedin.com/in/rail-batyrshin-852125235/"
          className={styles['footer__icon']}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Linkedin} alt="Linkedin" width={36} height={36} />
        </a>
        <hr className={styles.footer__line} />
        <p className={styles.footer__text}>© Rail Batyrshin 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
