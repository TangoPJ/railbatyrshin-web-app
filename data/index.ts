export interface INavMenu {
  name: string;
  path: string;
}

export const navMenu: Array<INavMenu> = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
];
