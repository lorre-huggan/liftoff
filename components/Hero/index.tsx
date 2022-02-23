import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LiftOff from '../../public/image/liftoff-cover.jpg';
import Paper from '../../public/image/2.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex items-center justify-center pb-[4rem] lg:mt-8 lg:px-[2rem] lg:pb-[8rem] xl:px-[10rem] xl:pb-[10rem] 2xl:mt-16">
      <div className="lg:w-100% mx-auto mt-8 grid w-[90%] grid-cols-1  lg:grid-cols-2 lg:gap-2">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default Hero;

const Left: React.FC = () => {
  return (
    <div className="mx-auto flex w-full items-start md:items-center lg:w-[76.6%] ">
      <div>
        <h2 className="mb-8 font-mono text-2xl font-black sm:text-3xl md:text-5xl lg:text-6xl">
          Turn your
          <span className="from-tpink-500 bg-gradient-to-br to-red-400 bg-clip-text text-transparent">
            {' '}
            content
          </span>{' '}
          into digital products that earn money.
        </h2>
        <p className="text-base md:text-xl">
          Learn to grow an audience and create products that people love.
          Liftoff is a one-of-a-kind course
          <span className="from-tpink-500 bg-gradient-to-br to-red-200 bg-clip-text text-transparent">
            {' '}
            for creators like you.
          </span>
        </p>
        <div className="mt-8 ">
          <form className="w-full justify-between md:flex">
            <input
              className=" mb-4 w-full rounded-md p-3 md:mb-0"
              placeholder="First name"
            />
            <input
              className="w-full rounded-md p-3 md:ml-4 md:w-full"
              placeholder="Email address"
            />
          </form>
          <button className="bg-tpink-500 hover:bg-tpink-700 mt-4 w-full rounded-md p-4 transition-colors duration-300 ease-in-out">
            Join the launch crew
          </button>
        </div>
      </div>
    </div>
  );
};

const Right: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const magazineScroll = {
    transform: `rotate(${Math.floor(scrollY / 80)}deg) 
    translateY(-${Math.floor(scrollY) / 4}px) 
    translateX(${Math.floor(scrollY / 100)}px)`,
    transformOrigin: `0% 100%`,
  };

  const paperScroll = { transform: `rotate(-${Math.floor(scrollY / 100)}deg)` };

  return (
    <div className="mt-20 flex h-[26rem] w-full items-center lg:mt-0 lg:h-[34rem]  xl:h-[39rem]">
      <div className="relative mx-auto flex h-full w-full justify-center">
        <div
          className="relative h-[26rem] w-[18rem] rounded-xl shadow-xl transition-transform ease-linear lg:h-[34rem] lg:w-[24rem] xl:h-[39rem] xl:w-[30rem]"
          style={paperScroll}
        >
          <div className="absolute top-10 left-0 h-[20rem] w-[10rem] animate-pulse bg-cyan-300/30 blur-3xl delay-300 duration-200 lg:h-[40rem] lg:w-[20rem]" />
          <div className="bg-tpink-500/30 delay-400 absolute bottom-10 right-0 h-[20rem] w-[10rem] animate-pulse blur-3xl lg:h-[40rem] lg:w-[20rem] " />

          <Image
            src={Paper}
            alt="takeoff-mag"
            objectFit="cover"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div
          className="absolute z-30 h-[26rem] w-[18rem] overflow-hidden rounded-lg shadow-2xl transition-transform ease-linear lg:h-[34rem] lg:w-[24rem] xl:h-[39rem] xl:w-[30rem]"
          style={magazineScroll}
        >
          <Image
            src={LiftOff}
            alt="takeoff-mag"
            objectFit="cover"
            layout="fill"
            className=""
          />
        </div>
      </div>
    </div>
  );
};
