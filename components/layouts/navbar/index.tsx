import Link from 'next/link';
import { useRouter } from 'next/router';
import { INavMenu, navMenu } from '../../../data';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const menu = navMenu.map((menuItem: INavMenu, index: number) => {
    return (
      <li className={styles.navbar__menuItem} key={`${menuItem.name}-${index}`}>
        <Link href={menuItem.path}>
          <a
            className={`
              ${styles.navber__menuLink}
              ${currentRoute === menuItem.path ? styles.navbar__active : ''}
            `}
          >
            {menuItem.name.toUpperCase()}
          </a>
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
