import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";
const LoggedUser = () => {
  const { currentUser, setCurrentUser, setPending } = useContext(AuthContext);
  const navigate = useNavigate();
  if (currentUser) {
    return (
      <div>
        {/* {JSON.stringify(currentUser)} */}
        <div className="flex w-full border-2">
          <input
            type="text"
            placeholder="UserName"
            className="m-auto border-2"
          />
        </div>
      </div>
    );
  }
  return navigate("/", { replace: true });
};

export default LoggedUser;
