import Link from 'next/link';
import { useRouter } from 'next/router';
import { INavMenu, navMenu } from '../../../data';
import MobileMenu from './mobile';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const menu = navMenu.map((menuItem: INavMenu, index: number) => {
    return (
      <li className={styles.navbar__menuItem} key={`${menuItem.name}-${index}`}>
        <Link
          href={menuItem.path}
          className={`
              ${styles.navbar__menuLink}
              ${currentRoute === menuItem.path ? styles.navbar__active : ''}
            `}
        >
          {menuItem.name.toUpperCase()}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <span className={styles.navbar__name}>Rail</span>
        <span className={styles.navbar__lastName}>Batyrshin</span>
      </Link>
      <ul className={styles.navbar__menu}>{menu}</ul>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
