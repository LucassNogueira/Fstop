import React, { useContext } from "react";
import { AuthContext } from "./Auth";
const FavDriver = () => {
  const { userDoc } = useContext(AuthContext);
  let driverSearch = "";
  if (userDoc?.favDriver?.name) {
    driverSearch = userDoc?.favDriver?.name.replace(" ", "_");
  }

  return (
    <section className="text-gray-600 body-font mt-2 mb-5">
      <div className="container  mx-auto flex flex-wrap justify-center">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-3/5 sm:w-2/3 justify-center sm:pr-10">
          <div className="w-full sm:p-2 px-4">
            <h1 className="title-font font-semibold text-5xl text-center  sm:text-8xl mb-2 text-gray-900">
              {userDoc?.favDriver?.name}
            </h1>
          </div>
          <div className="mt-8 pb-2  sm:pb-5">
            <div className="relative">
              <div className="absolute h-1/2 bg-gray-50" />
              <div className="relative max-w-7xl  px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto w-[22rem] md:w-[36rem] sm:w-full">
                  <dl className="rounded-lg bg-white shadow-2xl sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-200 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-none font-medium text-gray-500">
                        Career Points
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        {userDoc?.favDriver?.career_points}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-200 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Podiums
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        {userDoc?.favDriver?.podiums}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-200 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Races Entered
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        {userDoc?.favDriver?.grands_prix_entered}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-auto lg:h-auto sm:h-auto sm:w-auto  rounded-lg overflow-hidden mt-6 sm:mt-0">
          <a
            className="text-gray-500 "
            href={`https://en.wikipedia.org/wiki/${driverSearch}`}
            target="_blank"
          >
            <img
              className=" object-center sm:h-[360px] lg:h-[30rem] rounded-full "
              src={userDoc.halfImg?.img}
              alt="driverimg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FavDriver;
