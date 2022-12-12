import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import CreateEventButton from "./CreateEventButton";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <button
        style={{borderRadius:'10px', border:'1px solid #56C795', color: '#56C795'}}
        onClick={handleReset}
        className=" bg-white py-2 px-4 mr-5"
      >
        Today
      </button>
      <CreateEventButton />
    </header>
  );
}
