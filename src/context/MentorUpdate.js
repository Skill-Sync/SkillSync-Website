import React, { createContext, useContext, useState } from "react";

const UpdateContext = createContext();

const UpdateProvider = ({ children }) => {
  const [updateUser, setUpdateUser] = useState();

  /* ==================
      Update Function
    ===================*/
  const handleUpdateProfile = async (name, email, photo, about) => {
    try {
      const response = await fetch(
        "https://skill-sync.onrender.com/api/v1/mentors/updatePersonalData",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            photo,
            about,
          }),
        }
      );

      if (response.ok) {
        const updatedUserData = await response.json();
        setUpdateUser(updatedUserData);
        console.log("Profile updated successfully");
      } else {
        const errorData = await response.json();
        console.error("Profile update failed:", errorData);
      }
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <UpdateContext.Provider value={{ updateUser, handleUpdateProfile }}>
      {children}
    </UpdateContext.Provider>
  );
};
export const useUpdateContext = () => useContext(UpdateContext);

export default UpdateProvider;
