import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import One from '../../public/image/chapter-01.jpg';
import Two from '../../public/image/chapter-02.jpg';
import Three from '../../public/image/chapter-03.jpg';
import Four from '../../public/image/chapter-04.jpg';
import Five from '../../public/image/chapter-05.jpg';
import Six from '../../public/image/chapter-06.jpg';
import Seven from '../../public/image/chapter-07.jpg';
import Eight from '../../public/image/chapter-08.jpg';
import Nine from '../../public/image/chapter-09.jpg';

type Props = {};

const cards = [
  {
    chapter: 'chapter 1',
    title: 'You are a Creator',
    sub: 'You might not know it, but you are part of a historic movement. ',
    image: One,
  },
  {
    chapter: 'chapter 2',
    title: 'Creating Profitable Digital Products',
    sub: 'Learn what makes a good digital product and how to create and sell them.',
    image: Two,
  },
  {
    chapter: 'chapter 3',
    title: 'Solving the Right Problem',
    sub: 'Learn how to create human-centered products that solve specific problems',
    image: Three,
  },
  {
    chapter: 'chapter 4',
    title: 'Crafting Your Personality',
    sub: 'Create a personality for your brand that resonates with your audience.',
    image: Four,
  },
  {
    chapter: 'chapter 5',
    title: 'Practical Pricing Strategies',
    sub: "Pricing is tough, but there's a strategy to inch towards perfect pricing.",
    image: Five,
  },
  {
    chapter: 'chapter 6',
    title: 'Education as a Feature',
    sub: "Product education is the unsung hero that answers questions before they're asked.",
    image: Six,
  },
  {
    chapter: 'chapter 7',
    title: 'Converting Customers With Content',
    sub: 'Create powerful content marketing that puts a rocket booster on your products.',
    image: Seven,
  },
  {
    chapter: 'chapter 8',
    title: 'Automating Growth',
    sub: "Automations don't just save you money, they can make you money.",
    image: Eight,
  },
  {
    chapter: 'chapter 9',
    title: 'Ready For Liftoff',
    sub: "Time to take everything we've learned and put it into an actionable flight plan.",
    image: Nine,
  },
];

const pops = [
  {
    title: 'Designers',
    panel:
      'The design industry is on fire right now. Turn your designs into pre-designed templates, design bundles, stock resources, and more.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Web Developers',
    panel:
      'Web development is moving at lightspeed. Learn how to turn your apps, tools, and templates into products that other developers can benefit from.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Writers',
    panel:
      'Creators like Nathan Barry have used eBooks to generate hundreds of thousands of dollars and launch multi-million dollar businesses.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    title: 'Theme + Plugin Creators',
    panel:
      'Competing in the WordPress space is tough. Learn how to stand out from the crowd and turn your themes and plugins into industry-shaking products.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: ' Educators + Coaches',
    panel:
      'The e-learning industry will be valued at over $300 billion by 2025. Online courses can help you tap into a niche audience and grow membership revenue fast.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Audio + Video Creators',
    panel:
      'Video and audio are the most engaging forms of content out there. Learn how to split your digital content into multiple revenue streams.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Marketers',
    panel:
      'All of these creators need your expertise to help them market their products! Learn how productize your marketing services to reach a wide audience.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  },
  {
    title: 'Influencers',
    panel:
      'You have to know who your audience is before you start building it. Liftoff helps you narrow in on an audience and create personas that you can market to.',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const Explore = (props: Props) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [isPassesH2, setIsPassesH2] = useState(false);
  const [isPassesP, setIsPassesP] = useState(false);

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

  useEffect(() => {
    if (h2Ref.current?.offsetTop! < scrollY * 2) {
      setIsPassesH2(true);
    } else {
      setIsPassesH2(false);
    }
    if (pRef.current?.offsetTop! < scrollY * 2) {
      setIsPassesP(true);
    } else {
      setIsPassesP(false);
    }
  }, [scrollY]);

  return (
    <section className="mt-4 w-full bg-slate-100 pt-6 pb-10 lg:p-10 lg:pb-16">
      <div className="mx-auto w-[90%] 2xl:w-[70%]">
        <div className="mx-auto w-full pt-8 sm:w-[90%] lg:w-2/5">
          <h2
            ref={h2Ref}
            className={`text-center text-4xl  font-bold text-slate-800 transition-all duration-300 ease-in-out lg:text-7xl ${
              isPassesH2 ? 'opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Explore the course
          </h2>
          <p
            ref={pRef}
            className={`mt-8 text-center text-base text-slate-600 transition-all duration-300 ease-in-out lg:text-xl ${
              isPassesP ? 'opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            Click on any of the chapters below to learn a little more about the
            course and hear a sample of the audiobook.
          </p>
        </div>
        <Grid scrollY={scrollY} />
        <CourseDetails />
      </div>
    </section>
  );
};

export default Explore;

interface IScroll {
  scrollY: number;
}

const Grid: React.FC<IScroll> = ({ scrollY }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPassedCard, setIsPassedCard] = useState<boolean>(false);

  useEffect(() => {
    if (cardRef.current?.offsetTop! < scrollY * 4) {
      setIsPassedCard(true);
    } else {
      setIsPassedCard(false);
    }
  }, [scrollY]);

  return (
    <div className="mt-16 mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {cards.map((card, i) => {
        return (
          <div
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            ref={cardRef}
            key={i}
            className={`group relative mx-auto min-h-[400px] w-[280px] overflow-hidden rounded-2xl transition-all duration-500   ease-in-out  sm:min-h-[470px] sm:w-[350px] ${
              isPassedCard ? 'opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="absolute bottom-0 z-20 h-1/3 w-full bg-gradient-to-t from-black/90  via-black/60 to-transparent"></div>
            <Image src={card.image} alt={card.title} layout="fill" />
            <div className="absolute  top-0 left-0  flex h-full w-full flex-col items-center justify-center bg-gray-800/50 p-6">
              <p className="z-30 mb-2 uppercase">{card.chapter}</p>
              <h3 className="z-30 mb-4 text-center font-mono text-4xl font-bold">
                {card.title}
              </h3>
              <p className="z-30 text-center text-lg">{card.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CourseDetails: React.FC = () => {
  return (
    <div className="mb-4 flex w-full flex-col md:flex-row">
      <div className="mb-4 flex-1 p-2">
        <h3 className="mb-4 font-mono text-4xl font-bold text-slate-800">
          Who is this course for?
        </h3>
        <p className="mb-2 text-lg text-slate-600">
          The creator economy is made up of millions of different creators from
          diverse backgrounds – designers, developers, educators, content
          creators, and more.
        </p>
        <p className="text-lg text-slate-600">
          What these creators all have in common is the ability to package up
          their passions and expertise into digital products or services and
          distribute far and wide on the web. Digital products make for a
          lucrative, low-risk opportunity for creative professionals, educators,
          and freelancers to make money online and grow audiences with their
          products and services.
        </p>
      </div>
      <div className="flex-1 p-2 md:pt-0">
        {pops.map((pop, i) => {
          return (
            <PopOver
              key={pop.title}
              title={pop.title}
              panel={pop.panel}
              svg={pop.svg}
            />
          );
        })}
      </div>
    </div>
  );
};

interface IPopOver {
  title: string;
  panel: string;
  svg: React.SVGProps<SVGSVGElement>;
}

const PopOver: React.FC<IPopOver> = ({ title, panel, svg }) => {
  return (
    <Popover className="relative mt-2">
      <Popover.Button className=" flex w-full rounded-lg bg-stone-200 p-4 text-slate-700 hover:bg-stone-400">
        <div className="mr-2">{svg}</div>
        {title}
      </Popover.Button>
      <Popover.Panel className="absolute z-10 mt-2 hidden rounded-lg bg-stone-700 p-4 shadow-xl sm:block">
        <p className="text-stone-100">{panel}</p>
      </Popover.Panel>
    </Popover>
  );
};
