import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      axios
        .get("/staff")
        .then((response) => {
          setUser(response.data);
          setFetched(true);
          setReady(true);
        })
        .catch((error) => {
          console.error("Error fetching staff data:", error);
          setFetched(true);
          setReady(true);
        });
    } else {
      setReady(true);
    }
  }, [fetched]);

  useEffect(() => {
    if (!fetched) {
      axios
        .get("/student")
        .then((response) => {
          setUser(response.data);
          setFetched(true);
          setReady(true);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
          setFetched(true);
          setReady(true);
        });
    } else {
      setReady(true);
    }
  }, [fetched]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
