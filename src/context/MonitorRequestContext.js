import React , {useState , useContext ,createContext} from "react";


const monitorContext = createContext('')

const MonitorProvider =({children})=>{
  const [monitor, setMonitor] = useState();
    const monitorRequest = async (name, email, phone, skill, requestLetter) => {
    try {
      const response = await fetch(
        "https://skill-sync.onrender.com/api/v1/auth/mentorRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email,  phone, skill, requestLetter }),
        }
      );
      if (response.ok) {
        const monitorData = await response.json();
        setMonitor(monitorData);
      } else {
        const errorData = await response.json();
        throw new Error(`Monitor Request failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to Monitor Request. Please try again later.");
    }
  };

  const value= {monitor , monitorRequest}
return(
  <monitorContext.Provider value={value}>
    {children}
  </monitorContext.Provider>
)
}

export const useMonitorContext = ()=> useContext(monitorContext)

export default MonitorProvider;
