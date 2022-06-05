import React from 'react';
import { Tab } from '@headlessui/react';
import one from '../../public/image/chapter.png';
import two from '../../public/image/chapter2.png';
import three from '../../public/image/chapter3.png';
import Image from 'next/image';

type Props = {};

const cards = [
  {
    text: 'Online Courses',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-tpink-500 h-6 w-6 lg:h-10 lg:w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    text: '100 + Page eBook',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-tpink-500 h-6 w-6 lg:h-10 lg:w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    text: 'Audiobook',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-tpink-500 h-6 w-6 lg:h-10 lg:w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
];

const content = [{ img: one }, { img: two }, { img: three }];

const Details = (props: Props) => {
  return (
    <section className="mx-auto mt-16 w-[90%] pb-16 lg:w-[85%] 2xl:w-[65%]">
      <h3 className="text-center font-mono text-3xl font-bold md:text-5xl">
        {`Here's what you'll get`}
      </h3>
      <p className="mt-8 text-center text-lg md:text-xl lg:px-60 ">
        Read Liftoff on your phone, listen to the audiobook while you are
        running, or browse the ebook on your next flight.{' '}
      </p>
      <div className=" mt-16 inline-flex w-full flex-wrap gap-4">
        {cards.map((card) => {
          return <Card svg={card.svg} text={card.text} key={card.text} />;
        })}
      </div>
      <Courses />
    </section>
  );
};

export default Details;

interface ICard {
  svg: React.SVGProps<SVGSVGElement>;
  text: string;
}

const Card: React.FC<ICard> = ({ svg, text }) => {
  return (
    <div className="flex h-10 min-w-[275px] flex-1 flex-row items-center justify-center rounded-lg bg-slate-300/20  lg:bg-transparent ">
      {svg}
      <p className="from-tpink-500 ml-2 bg-gradient-to-br to-red-200 bg-clip-text text-lg  font-semibold text-transparent md:text-xl 2xl:text-3xl">
        {text}
      </p>
    </div>
  );
};

const Courses: React.FC = () => {
  return (
    <div className="from-tpink-600 mx-auto mt-16 w-full rounded-lg bg-gradient-to-br to-red-300 px-4 pt-4 md:w-[80%]">
      <h3 className="mb-2 text-center font-mono text-2xl font-black">
        Online Courses
      </h3>
      <p className="p-4 text-center text-lg lg:px-32">
        The Liftoff dashboard has everything you need to get started! Work
        through the course, save highlights from each chapter, read through
        expert interviews, and access exclusive discounts and resources.{' '}
      </p>
      <MyTabs />
    </div>
  );
};

const MyTabs = () => {
  return (
    <div className="relative">
      <Tab.Group>
        <Tab.List className="mb-12 mt-4 flex w-full items-center justify-between">
          <div className="mx-auto flex w-3/5 justify-between md:w-[20%]">
            <Tab
              className={({ selected }) =>
                selected
                  ? 'h-5 w-5 animate-bounce rounded-full bg-white'
                  : 'h-5 w-5 rounded-full bg-white/40'
              }
            ></Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'h-5 w-5 animate-bounce rounded-full bg-white'
                  : 'h-5 w-5 rounded-full bg-white/40'
              }
            ></Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'h-5 w-5 animate-bounce rounded-full bg-white'
                  : 'h-5 w-5 rounded-full bg-white/40'
              }
            ></Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          {content.map((cont, i) => {
            return (
              <Tab.Panel
                className="relative bottom-0 mx-auto h-[150px] w-[90%] md:h-[250px] xl:h-[400px] "
                key={i}
              >
                <Image
                  src={cont.img}
                  alt="course"
                  layout="fill"
                  objectFit="contain"
                  className=" absolute bottom-0 rounded-t-lg"
                />
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
