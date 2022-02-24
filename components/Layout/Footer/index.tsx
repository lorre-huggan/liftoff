import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-200 py-4">
      <div className="mx-auto flex w-[70%] justify-between text-xs text-slate-800">
        <p>2022 LIFTOFF</p>
        <p>Built by Lorre Huggan</p>
      </div>
    </footer>
  );
};

export default Footer;
