import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/HomePage'));
const TrailersPage = lazy(() => import('../pages/TrailersPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<TrailersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};