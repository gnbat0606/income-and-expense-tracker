"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [token, setToken] = useState("true");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const longinHandler = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });
      window.localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setIsLoggedIn(true);
      setLoading(false);
    } catch (error) {
      setToken("");
      setLoading(false);
      setIsLoggedIn(false);
      console.log(error.res.data);

      throw new Error(error.res.data);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log(token);

    if (token) {
      setToken(token);
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setToken("");
      setIsLoggedIn(false);
      setLoading(false);
      router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ longinHandler, isLoggedIn, loading, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
