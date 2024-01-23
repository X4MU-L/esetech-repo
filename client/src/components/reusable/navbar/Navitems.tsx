import { useContext } from 'react';
import { LOGGEDINITEMS } from './constant';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import {
  UserDispatchContext,
  UserStateContext,
  dispatchFromStorage,
} from '../../../context/AppContext';
import { Logout } from '../../../../firebaseConfig';

const NavItems: React.FC = () => {
  const state = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    dispatchFromStorage(dispatch, null);
    await Logout();
    navigate('/');
  };

  return (
    <ul className='flex gap-6 self-end  items-center'>
      {LOGGEDINITEMS.map((link) => {
        const { path, pathName } = link;
        if ((path === '/signup' || path === '/login') && state) {
          return null;
        }
        if (path === '/create_notes' && !state) {
          return null;
        }
        return (
          <li
            key={pathName}
            className={`${
              path === '/signup' || path === '/create_notes'
                ? 'px-6 py-2 rounded-2xl bg-[#28bf96]'
                : ''
            }`}
          >
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? 'navbarlink active'
                  : isPending
                  ? 'navbarlink pending'
                  : 'navbarlink'
              }
              to={path}
            >
              <span className='text-center self-start'>{pathName}</span>
            </NavLink>
          </li>
        );
      })}
      {state && (
        <li
          onClick={handleLogOut}
          className=' text-white px-6 py-2 rounded-2xl bg-[#28bf96]'
        >
          <button>Log Out</button>
        </li>
      )}
    </ul>
  );
};

export default NavItems;
