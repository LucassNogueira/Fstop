import React, { useState, useContext } from "react";

import { AuthContext } from "../Auth";
import firebase from "../../firebase/base";
const entriesDB = firebase.firestore().collection("Users");
const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { currentUser } = useContext(AuthContext);

  function newEntry(e, newObj) {
    e.preventDefault();
    entriesDB
      .doc(currentUser.uid)
      .set(newObj)
      .catch((err) => alert(err));
    setLastName("");
    setFirstName("");
  }
  return (
    <div className="mt-20 flex flex-col text-center justify-center items-center">
      <h1>Profile</h1>
      <form>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
          required
          placeholder="First Name"
        />

        <label className=" text-gray-700">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name "
            required
            rows="5"
            cols="40"
          ></input>
          <button
            onClick={(e) =>
              newEntry(e, {
                firstName,
                lastName,
                email: currentUser.email,
                uid: currentUser.uid,
              })
            }
            type="submit"
          >
            Submit!
          </button>
        </label>
      </form>
    </div>
  );
};

export default Profile;
