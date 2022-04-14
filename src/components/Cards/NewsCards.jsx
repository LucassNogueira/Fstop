import React from "react";
import norris from "../media/newsimg/norris.png";
import ferrari from "../media/newsimg/ferrari.png";
import haas from "../media/newsimg/haas.png";
import russell from "../media/newsimg/russellnews.jpg";
import alonso from "../media/newsimg/alonso.jpg";
import drick from "../media/newsimg/drick.jpg";
import double from "../media/newsimg/double.jpg";
import pissed from "../media/newsimg/pissed.jpg";
import match from "../media/newsimg/match.jpg";
import aston from "../media/newsimg/aston.jpg";
import merc from "../media/newsimg/merc.jpg";
import fir from "../media/newsimg/fir.jpg";
const posts = [
  {
    title: "Norris finally speaks up!",
    href: "/news",
    description:
      "Lando Norris has conceded that moods have dipped at McLaren, who sit eighth in the championship ahead of this weekend’s 2022 Australian Grand Prix – but the squad are still motivated to push on and recover.",
    date: "Mar 16, 2022",
    datetime: "2022-03-16",
    imageUrl: norris,
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Does Ferrari have what it takes?",
    href: "/news",

    description: `Ferrari Team Principal Mattia Binotto has acknowledged that while his squad "lost ground" to rivals in previous years, they are now primed for a tough development war as they aim to win their first championship since 2008.`,
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: ferrari,
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Magnussen scores big for Haas!",
    href: "/news",

    description: `Haas F1 Team Principal Guenther Steiner has spoken about Kevin Magnussen’s improved motivation and maturity after the Dane spent a year out of Formula 1 before returning in 2022 with the rejuvenated squad.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: haas,
    readingTime: "5 min",
    author: {
      name: "Daniela Metz",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Russell's first podium for Mercedes",
    href: "/news",

    description: `George Russell took his first podium for Mercedes and second in the drivers’ standings with a P3 finish in the Australian Grand Prix – the Briton later admitting that he was surprised to be in that position, given his team’s deficit to Red Bull and Ferrari.`,
    date: "Feb 12, 2022",
    datetime: "2020-02-12",
    imageUrl: russell,
    readingTime: "14 min",
    author: {
      name: "Kamren Crane",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Alonso left 'speechless' after weekend in Melbourne",
    href: "/news",

    description: `Fernando Alonso said he was “speechless” that he couldn’t challenge the Mercedes in Sunday’s Australian Grand Prix, given he believed Alpine’s pace to be superior to the Silver Arrows’. And the two-time champion said a run of misfortune cost him a possible podium at Albert Park.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: alonso,
    readingTime: "13 min",
    author: {
      name: "Owen Bartlett",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Daniel Ricciardo stoked on not having a 'painful home race'!",
    href: "/news",

    description: `Daniel Ricciardo was relieved to score his first points of the season and, moreover, accomplish that in front of his home fans at Albert Park given a rocky start to the season for McLaren.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: drick,
    readingTime: "11 min",
    author: {
      name: "Raul Rivers",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `McLaren happy with double-points finish – but Norris warns repeats will be tough`,
    href: "/news",

    description: `Having scored just six points from the season’s opening two rounds, McLaren came away from Melbourne with a further 18, after both their drivers finished in the top 10. Maintaining such results could be tough, however, according to Lando Norris.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: double,
    readingTime: "20 min",
    author: {
      name: "Kara Alvarez",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `‘If you want to fight for the title these things can’t happen’ – Verstappen `,
    href: "/news",

    description: `Max Verstappen retired from his second Grand Prix in three races in Melbourne, losing out on what he said would have been an “easy P2” behind eventual winner Charles Leclerc – with the Dutchman left unamused by his Australian Grand Prix stoppage.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: pissed,
    readingTime: "10 min",
    author: {
      name: "Jorden Horne",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `‘We couldn’t match Ferrari at any point’ says Perez after salvaging P2 for Red Bull`,
    href: "/news",

    description: `On a Sunday in which Charles Leclerc cruised to victory for Ferrari and team mate Max Verstappen retired from contention, Sergio Perez said he accomplished the ‘maximum’ possible for Red Bull with P2 at Albert Park – especially given the Scuderia’s pace.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: match,
    readingTime: "9 min",
    author: {
      name: "Mary Mcdonald",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `Vettel says Aston Martin was ‘too much of a handful for me’ after crashing out of racing return in Australia`,
    href: "/news",

    description: `Sebastian Vettel says his race-ending crash in Melbourne was a result of him wanting “too much too soon” on his return to racing after missing the first two rounds of the season with Covid-19.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: aston,
    readingTime: "7 min",
    author: {
      name: "Sterling Mayer",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `Hamilton explains ‘difficult position’ radio message after coming home behind Russell in Melbourne`,
    href: "/news",

    description: `Lewis Hamilton was full of praise for his team after Mercedes bagged something of a surprising P3 and P4 finish in Australia – and explained a late radio message heard on the TV broadcast that he insisted wasn’t a criticism of the Silver Arrows and his race strategy.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: merc,
    readingTime: "11 min",
    author: {
      name: "Kara Alvarez",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: `‘It was the first race where we could control the gap’ says Leclerc after extending championship lead Down Under`,
    href: "/news",

    description: `Charles Leclerc said he was able to control the lead of a race for the first time in F1 after a show of dominance in Melbourne, as the Ferrari driver extended his lead in the championship with a very comfortable victory in the Australian Grand Prix.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: fir,
    readingTime: "15 min",
    author: {
      name: "Kaylee Gibbs",
      href: "/news",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
const NewsCards = () => {
  let random = posts.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div
      id="news"
      className="bg-gray-50  pb-20 px-4  sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className=" inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="lg:text-6xl text-5xl font-extrabold text-gray-900 sm:text-4xl">
            From the pits
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            The latest Formula 1 news, events and reactions. With breaking
            stories, results, upcoming races and team and driver news.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {random.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <a href={post.href} className="block">
                  <img
                    className="h-50 w-full object-cover"
                    src={post.imageUrl}
                    alt={post.imageUrl}
                  />
                </a>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block">
                    <p className="text-2xl mb-5 font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="hover:underline">
                        {post.author.name}
                      </span>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
