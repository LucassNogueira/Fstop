import React from "react";
import norris from "./media/norris.png";
import ferrari from "./media/ferrari.png";
import haas from "./media/haas.png";
const posts = [
  {
    title: "Norris finally speaks up!",
    href: "#",
    description:
      "Lando Norris has conceded that moods have dipped at McLaren, who sit eighth in the championship ahead of this weekend’s 2022 Australian Grand Prix – but the squad are still motivated to push on and recover.",
    date: "Mar 16, 2022",
    datetime: "2022-03-16",
    imageUrl: norris,
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Does Ferrari have what it takes?",
    href: "#",

    description: `Ferrari Team Principal Mattia Binotto has acknowledged that while his squad "lost ground" to rivals in previous years, they are now primed for a tough development war as they aim to win their first championship since 2008.`,
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: ferrari,
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Magnussen scores big for Haas!",
    href: "#",

    description: `Haas F1 Team Principal Guenther Steiner has spoken about Kevin Magnussen’s improved motivation and maturity after the Dane spent a year out of Formula 1 before returning in 2022 with the rejuvenated squad.`,
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: haas,
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
const Cards = () => {
  return (
    <div className="bg-gray-50 mb-5 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <a name="news"></a>
      {/*remove mb-5 once footer in place*/}
      <div className=" inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            From the pits
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            The latest Formula 1 news, events and reactions. With breaking
            stories, results, upcoming races and team and driver news.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-50 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.imageUrl}
                />
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
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
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

export default Cards;
