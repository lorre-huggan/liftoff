import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/image/logo-dark.svg';
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-24">
      <div className="mx-auto flex h-full w-[90%] items-center justify-between lg:w-[70%]">
        <div className="relative h-full w-[164px]">
          <Image src={Logo} alt="logo" layout="fill" />
        </div>
        <div>
          <h3 className="ml-4 text-right font-mono text-xs text-white opacity-95 sm:text-left sm:text-sm md:text-xl">
            Liftoff is launching soon!
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
