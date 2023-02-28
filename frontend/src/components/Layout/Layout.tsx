import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

type ContextType = { sound: boolean | null, setSound: (el: boolean) => void };

export const Layout = () => {
  const [sound, setSound] = useState(true);
  return (
    <div className="page">
      <Header sound={sound} setSound={setSound} />
      <Outlet context={{ sound }} />
      <Footer />
    </div>
  );
};

export function useSound() {
  return useOutletContext<ContextType>();
}
