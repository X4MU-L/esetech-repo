import { LOGGEDINITEMS } from './constant';
import { NavLink } from 'react-router-dom';

const NavItems: React.FC = () => {
  return (
    <ul className='flex gap-6 self-end  items-center'>
      {LOGGEDINITEMS.map((link, i) => {
        const { path, pathName } = link;
        return (
          <li
            className={`${
              path === '/signup' || path === '/create_note'
                ? 'px-6 py-2 rounded-2xl bg-[#28bf96]'
                : ''
            }`}
          >
            <NavLink
              key={i}
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
    </ul>
  );
};

export default NavItems;