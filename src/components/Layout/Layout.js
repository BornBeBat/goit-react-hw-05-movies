import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink className={s.link} to="/">
                Home
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink className={s.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
