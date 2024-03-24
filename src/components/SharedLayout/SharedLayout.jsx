import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader';
import {Icon} from '../Icon/Icon'
import { Header } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
    <Header>
    <Link to="/">
      <Icon iconid={"icon-alcove"} width={36} height={36} fill={'var(--button-color)'} />
      </Link>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/catalog" className="nav-link">
          Catalog
        </Link>
        <Link to="/favorites" className="nav-link">
        Favorites
        </Link>
      </nav>
    </Header>
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  </>

  );
}