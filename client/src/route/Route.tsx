import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

import SignUp from '../pages/Signup';
import Hero from '../components/landing/Hero';

// loader
import { loader } from '../utils';
import NotesPage from '../pages/NotesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/create_notes',
        element: <NotesPage />,
        loader,
      },
    ],
  },
]);
