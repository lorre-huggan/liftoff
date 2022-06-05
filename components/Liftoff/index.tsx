import React from 'react';
import Image from 'next/image';
import liftoff from '../../public/image/liftoff-cover.jpg';
type Props = {};

const Liftoff = (props: Props) => {
  return (
    <section className="py-24">
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-16 md:grid-cols-2 xl:w-[70%]">
        <div className="relative flex items-center justify-center ">
          <div className="relative h-[460px] w-[350px]">
            <div className="absolute top-10 left-0 h-[20rem] w-[10rem] animate-pulse bg-cyan-300/30 blur-3xl delay-300 duration-200 " />
            <div className="bg-tpink-500/30 delay-400 absolute bottom-10 right-0 h-[20rem] w-[10rem] animate-pulse blur-3xl  " />
            <Image
              src={liftoff}
              alt="liftoff"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="w-full text-center font-mono text-2xl font-bold xl:text-5xl">
            Preparing for Liftoff
          </h3>
          <p className="mt-8 text-lg xl:text-xl">
            {`The course isn’t quite ready yet, but join the Launch List and I’ll notify you on launch day! I’ll also be sharing a behind-the-scenes look at the building and launching of the Liftoff Course!`}
          </p>
          <div className="mt-8 w-full">
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
    </section>
  );
};

export default Liftoff;
