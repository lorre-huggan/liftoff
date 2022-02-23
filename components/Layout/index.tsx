import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {};

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-6rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
