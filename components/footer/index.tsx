import Image from 'next/image';
import Github from '../../assets/images/svg/github-icon.svg';
import Linkedin from '../../assets/images/svg/linkedin-icon.svg';
import Twitter from '../../assets/images/svg/twitter-icon.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__inner-card']}>
        <a href="https://github.com/TangoPJ" target="_blank" rel="noreferrer">
          <Image
            src={Github}
            alt="Github"
            width={36}
            height={36}
            className={styles['footer__icon']}
          />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Image
            src={Twitter}
            alt="Github"
            width={36}
            height={36}
            className={styles['footer__icon']}
          />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Image
            src={Linkedin}
            alt="Github"
            width={36}
            height={36}
            className={styles['footer__icon']}
          />
        </a>
        <hr className={styles.footer__line} />
      </div>
    </footer>
  );
};

export default Footer;
