import React, { useState, useContext } from "react";
import { AuthContext } from "../Auth";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { currentUser } = useContext(AuthContext);

  return;
  // (
  // <div classNameName="mt-20 flex flex-col text-center justify-center items-center">
  //   <h1>Profile</h1>
  //   <htmlForm>
  //     <input
  //       onChange={(e) => setFirstName(e.target.value)}
  //       type="text"
  //       value={firstName}
  //       required
  //       placeholder="First Name"
  //     />

  //     <label classNameName=" text-gray-700">
  //       <input
  //         value={lastName}
  //         onChange={(e) => setLastName(e.target.value)}
  //         placeholder="Last Name "
  //         required
  //         rows="5"
  //         cols="40"
  //       ></input>
  //       <button type="submit">Submit!</button>
  //     </label>
  //   </htmlForm>
  // </div>

  // <div className="flex justify-center w-full mt-16 ">
  //   <div className="border-2 rounded-lg md:grid md:grid-cols-2 md:gap-6">
  //     <div className="mt-5 md:mt-0 md:col-span-2">
  //       <div className="shadow overflow-hidden sm:rounded-md">
  //         <div className="px-4 py-5 bg-white sm:p-6">
  //           <div className="grid grid-cols-6 gap-6">
  //             <div className="col-span-6 sm:col-span-3">
  //               <label
  //                 htmlFor="first_name"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 First name
  //               </label>
  //               <input
  //                 type="text"
  //                 name="first_name"
  //                 id="first_name"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-3">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 Last name
  //               </label>
  //               <input
  //                 type="text"
  //                 name="last_name"
  //                 id="last_name"
  //                 autoComplete="family-name"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-4">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 Email address
  //               </label>
  //               <input
  //                 type="text"
  //                 name="email_address"
  //                 id="email_address"
  //                 autoComplete="email"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-3">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 Country / Region
  //               </label>
  //               <select
  //                 id="country"
  //                 name="country"
  //                 autoComplete="country"
  //                 className=" h-10 mt-1 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  //               >
  //                 <option>United States</option>
  //                 <option>Canada</option>
  //                 <option>Mexico</option>
  //               </select>
  //             </div>

  //             <div className="col-span-6">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 Street address
  //               </label>
  //               <input
  //                 type="text"
  //                 name="street_address"
  //                 id="street_address"
  //                 autoComplete="street-address"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-6 lg:col-span-2">
  //               <label
  //                 htmlFor="city"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 City
  //               </label>
  //               <input
  //                 type="text"
  //                 name="city"
  //                 id="city"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 State / Province
  //               </label>
  //               <input
  //                 type="text"
  //                 name="state"
  //                 id="state"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>

  //             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //               <label className="block text-sm font-medium text-gray-700">
  //                 ZIP / Postal
  //               </label>
  //               <input
  //                 type="text"
  //                 name="postal_code"
  //                 id="postal_code"
  //                 autoComplete="postal-code"
  //                 className="border-2 h-8 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
  //           <button
  //             type="submit"
  //             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //           >
  //             Save
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
};

export default Profile;
