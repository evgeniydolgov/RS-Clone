import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
