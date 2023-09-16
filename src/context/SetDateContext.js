import React, { createContext, useContext, useState } from "react";

const SetHoursContext = createContext();

const SetHoursProvider = ({ children }) => {
  const [hours, setHours] = useState();

  const handleSave = async (workingHours) => {
    try {
      const response = await fetch(
        "https://skill-sync.onrender.com/api/v1/mentors/set-working-hours",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workingHours,
          }),
        }
      );

      if (response.ok) {
        const hoursMentorDate = await response.json();
        setHours(hoursMentorDate);

        console.log("Hours updated successfully");
      } else {
        console.error("Failed to update hours");
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <SetHoursContext.Provider value={{ hours, handleSave }}>
      {children}
    </SetHoursContext.Provider>
  );
};
export const useHoursContext = () => useContext(SetHoursContext);

export default SetHoursProvider;
