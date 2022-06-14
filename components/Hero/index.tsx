import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LiftOff from '../../public/image/liftoff-cover.jpg';
import Paper from '../../public/image/2.jpg';

type Props = {};

const Hero = (props: Props) => {
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

  return (
    <section className="flex items-center justify-center overflow-hidden pb-[4rem] lg:mt-8 lg:overflow-visible lg:px-[2rem] lg:pb-[8rem] xl:px-[10rem] xl:pb-[10rem] 2xl:mt-16">
      <div className="lg:w-100% mx-auto mt-8 grid w-[90%] grid-cols-1  lg:grid-cols-2 lg:gap-2">
        <Left scrollY={scrollY} />
        <Right scrollY={scrollY} />
      </div>
    </section>
  );
};

export default Hero;

interface IGrid {
  scrollY: number;
}

const Left: React.FC<IGrid> = ({ scrollY }) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isPassedH2, setIsPassedH2] = useState(false);
  const [isPassedP, setIsPassedP] = useState(false);
  const [isPassedDiv, setIsPassedDiv] = useState(false);

  useEffect(() => {
    if (h2Ref.current?.offsetTop! < scrollY * 4) {
      setIsPassedH2(true);
    } else {
      setIsPassedH2(false);
    }
    if (pRef.current?.offsetTop! < scrollY * 2) {
      setIsPassedP(true);
    } else {
      setIsPassedP(false);
    }
    if (divRef.current?.offsetTop! < scrollY * 2) {
      setIsPassedDiv(true);
    } else {
      setIsPassedDiv(false);
    }
  }, [scrollY]);

  return (
    <div className="mx-auto flex w-full items-start p-0 md:items-center ">
      <div>
        <h2
          ref={h2Ref}
          className={`mb-8 font-mono text-2xl font-black  transition-all duration-300 sm:text-3xl md:text-5xl 2xl:text-6xl ${
            isPassedH2 ? '-translate-y-10 opacity-0' : 'opacity-100'
          }`}
        >
          Turn your
          <span className="from-tpink-500 bg-gradient-to-br to-red-400 bg-clip-text text-transparent">
            {' '}
            content
          </span>{' '}
          into digital products that earn money.
        </h2>

        <p
          ref={pRef}
          className={`text-base transition-all duration-300 md:text-xl ${
            isPassedP ? '-translate-y-10 opacity-0' : 'opacity-100'
          }`}
        >
          Learn to grow an audience and create products that people love.
          Liftoff is a one-of-a-kind course
          <span className="from-tpink-500 bg-gradient-to-br to-red-200 bg-clip-text text-transparent">
            {' '}
            for creators like you.
          </span>
        </p>
        <div
          ref={divRef}
          className={`mt-8 transition-all duration-300 ${
            isPassedDiv ? '-translate-y-10 opacity-0' : 'opacity-100'
          }`}
        >
          <form className="w-full justify-between lg:flex">
            <input
              className=" mb-4 w-full rounded-md p-3 lg:mb-0"
              placeholder="First name"
            />
            <input
              className="w-full rounded-md p-3 md:w-full lg:ml-4"
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

const Right: React.FC<IGrid> = ({ scrollY }) => {
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
          className="relative mt-0 h-[26rem] w-[18rem] rounded-xl shadow-xl transition-transform ease-linear lg:h-[34rem] lg:w-[24rem] xl:ml-5 xl:mt-8 2xl:h-[39rem] 2xl:w-[28rem]"
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
          className="absolute z-30 mt-0 h-[26rem] w-[18rem] overflow-hidden rounded-lg shadow-2xl transition-transform ease-linear lg:h-[34rem] lg:w-[24rem] xl:mt-8 xl:ml-5 2xl:h-[39rem] 2xl:w-[28rem]"
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
