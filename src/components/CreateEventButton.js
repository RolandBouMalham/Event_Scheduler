import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border-0 p-2 flex items-center hover:shadow-2xl"
      style={{borderRadius:'10px', color:'#56C795'}}
    >
      <span className="pl-3 pr-7"> Create Event</span>
    </button>
  );
}
