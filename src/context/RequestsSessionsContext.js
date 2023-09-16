import React, { createContext, useContext, useEffect, useState } from "react";

const MeetingContext = createContext();

const MeetingProvider = ({ children }) => {
  const [meeting, setMeeting] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define a function to fetch the meeting data by ID
    const fetchMeetingById = async (meetingId) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://skill-sync.onrender.com/api/v1/meetings/${meetingId}`
        );

        if (response.ok) {
          const meetingData = await response.json();
          setMeeting(meetingData);
        } else {
          console.error("Failed to fetch meeting data");
        }
      } catch (error) {
        console.error("API request failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchMeetingById function with the desired meeting ID
    fetchMeetingById("6504bdeaa1f9b1554b9b0067");
  }, []); // Empty dependency array to fetch data once when the component mounts
  const rejectSession = (sessionId) => {
    // Filter out the session with the provided ID to remove it
    const updatedSessions = meeting.filter(
      (session) => session.id !== sessionId
    );

    setMeeting(updatedSessions);
  };
  return (
    <MeetingContext.Provider value={{ meeting, isLoading, rejectSession }}>
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeetingContext = () => useContext(MeetingContext);

export default MeetingProvider;
