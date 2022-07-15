import Link from 'next/link';
import { INavMenu, navMenu } from '../../../data';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const menu = navMenu.map((menuItem: INavMenu) => {
    return (
      <li key={menuItem.name}>
        <Link href={menuItem.path}>
          <a>{menuItem.name.toUpperCase()}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <span className={styles.navbar__name}>Rail</span>
        <span className={styles.navbar__lastName}>Batyrshin</span>
      </div>
      <ul className={styles.navbar__menu}>{menu}</ul>
    </nav>
  );
};

export default Navbar;
