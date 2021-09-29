import React, { useState, useEffect } from "react";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = (props) => {
  // Is this context dependencie always "re-trigger" the Menu Context Provider?
  const [loggedIn, setLoggedIn] = useState(false);

  const [location, setLocation] = useState(false);

  const [bowls, setBowls] = useState([{ step: 0 }]);

  const [currentBowl, setCurrentBowl] = useState(0);

  const [restaurant, setRestaurant] = useState(undefined);

  useEffect(() => {
    if (location != undefined) console.log(JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    console.log("Nw bowls st~! " + JSON.stringify(bowls));
  }, [bowls]);

  return (
    <Provider
      value={{
        loggedIn,
        setLoggedIn,
        location,
        setLocation,
        restaurant,
        setRestaurant,
        bowls,
        setBowls,
        currentBowl,
        setCurrentBowl,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { UserProvider, UserContext };
