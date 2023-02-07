import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = () => (
  <div className="page">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
