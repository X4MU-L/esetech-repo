interface endpoint {
  path: string;
  pathName: string;
}
export const LOGGEDINITEMS: endpoint[] = [
  {
    path: '/',
    pathName: 'Home',
  },
  {
    path: '/login',
    pathName: 'Login',
  },
  {
    path: '/signup',
    pathName: 'Sign Up',
  },
  {
    path: '/create_notes',
    pathName: 'Create Notes',
  },
];

export const NOTLOGGEDINITEMS: endpoint[] = [
  {
    path: '/contact_us',
    pathName: 'Contact Us',
  },
];
