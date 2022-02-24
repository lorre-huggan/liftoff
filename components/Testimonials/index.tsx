import React from 'react';
import Image from 'next/image';
import founder from '../../public/image/founder.jpg';
import signature from '../../public/image/signature.png';
import demetris from '../../public/image/demetris.jpg';
import rosie from '../../public/image/rosie.jpg';
import sarah from '../../public/image/sarah.jpg';
type Props = {};

const cards = [
  {
    text: `Noa's creativity and thought leadership have made her an inspiring voice in online business. There's no doubt he can teach fellow creators how to turn their craft into cash.`,
    name: 'Demetris Breitenberg',
    company: 'Organizer, Hummingbird',
    img: demetris,
  },
  {
    text: `From selling digital products to building, scaling, and selling multiple products, Noa is uniquely qualified to educate the next gen of highly-talented creators.`,
    name: 'Rossie Casper',
    company: 'Design Director, Hello Spark',
    img: sarah,
  },
  {
    text: `Noa's creativity and thought leadership have made her an inspiring voice in online business. There's no doubt he can teach fellow creators how to turn their craft into cash.`,
    name: 'Sarah Jacobs',
    company: 'Co-founder, Lemon Squeezy',
    img: rosie,
  },
];

const Testimonials = (props: Props) => {
  return (
    <section className=" bg-slate-200 py-16">
      <div className="mx-auto grid h-auto w-[90%] grid-cols-1 gap-8 lg:w-[65%] lg:grid-cols-2  2xl:h-[40rem] 2xl:w-[70%]">
        <div className="from-tpink-500 to-tpurple-500 relative h-[300px] w-full  rounded-xl bg-gradient-to-br lg:h-full">
          <Image
            alt="Mikaela Brown"
            src={founder}
            layout="fill"
            objectFit="cover"
            className="rounded-lg opacity-50 contrast-150  grayscale-[1] saturate-50"
          />
        </div>
        <div className=" z-20 w-full rounded-xl bg-white p-6 shadow-md 2xl:mt-28 2xl:-ml-[10rem] 2xl:h-4/6 2xl:w-[125%] ">
          <h3 className="mb-4 font-mono text-4xl font-bold text-slate-700">
            Meet Noa
          </h3>
          <p className="text-slate-600">
            {`Hey there! I'm Noa Michael, a long-time product designer and
            principal software engineer from Wisconsin. I've spent the last 10
            years hand-crafting beautiful and innovative digital products like
            Array Themes and Atomic Blocks that millions of people use to power
            their websites.`}
          </p>
          <p className="mt-4 text-slate-600">
            {`Over the years, I've learned a spaceship full of knowledge about what it takes to create lucrative digital products that solve problems (and look good while they do it). I've put everything I know into the Liftoff course to help you grow an audience starting making money as a digital creator! `}
          </p>
          <div className="relative mt-8 h-8 w-24">
            <Image src={signature} alt="signature" layout="fill" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 grid w-[90%] grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-3 xl:w-[70%]">
        {cards.map((card) => {
          return (
            <div key={card.name} className="mx-auto mb-6  max-w-xl">
              <p className="text-tpink-500  font-serif text-5xl font-black">{`"`}</p>
              <p className=" text-slate-700">{card.text}</p>
              <div className="mt-4 flex">
                <Image
                  src={card.img}
                  alt={card.name}
                  height={75}
                  width={75}
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="items-left ml-4 flex flex-col justify-center text-slate-400">
                  <p className="font-bold text-slate-700">{card.name}</p>
                  <p>{card.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
