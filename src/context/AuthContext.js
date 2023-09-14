import React, { createContext, useContext, useState } from "react";

// create a new context object using the createContext() method
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
    console.log("Email:", email);
    console.log("Password:", pass);
    console.log("Type:", type);
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
        const user = await response.json();
        setUser(user);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData); // Log the error response
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error("Login failed: " + error.message);
    }
  };

  const value = {
    user,
    login,
    signup,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useStateContext = () => useContext(UserContext);

export default ContextProvider;
