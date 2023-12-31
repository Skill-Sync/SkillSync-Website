import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  /* ==================
      Signup Function
    ===================*/

  const signup = async (name, email, pass, passConfirm, type) => {
    try {
      const response = await fetch(
        "https://skill-sync.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, pass, passConfirm, type }),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        console.log(userData);
      } else {
        const errorData = await response.json();
        throw new Error(`Signup failed: ${errorData}`);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to signup. Please try again later.");
    }
  };

  // ==================
  //   Login Function
  // ==================
  const login = async (email, pass, type) => {
    try {
      const response = await fetch(
        "https://skill-sync.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, pass, type }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return userData;
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error("Login failed: " + error.message);
    }
  };
  /*
  ===========
  Log Out function
============
  */
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useStateContext = () => useContext(UserContext);

export default ContextProvider;
