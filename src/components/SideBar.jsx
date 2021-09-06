import React from "react";
// import { Fainbox, FaregCalendarAlt, FaregCalender } from "react-icons/fa";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
function SideBar({ selectedTab, setSelectedTab }) {
  console.log(selectedTab);
  return (
    <div className="sidebar">
      <div
        onClick={() => setSelectedTab("inbox")}
        className={selectedTab === "inbox" ? "active" : ""}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <div
        onClick={() => setSelectedTab("today")}
        className={selectedTab === "today" ? "active" : ""}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div
        onClick={() => setSelectedTab("next_7")}
        className={selectedTab === "next_7" ? "active" : ""}
      >
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
}

export default SideBar;
