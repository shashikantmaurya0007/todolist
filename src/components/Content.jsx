import React, { useState } from "react";
import SideBar from "./SideBar";
import Tasks from "./Tasks";

function Content() {
  const [selectedTab, setSelectedTab] = useState("inbox");

  return (
    <section className="content">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tasks selectedTab={selectedTab} />
    </section>
  );
}

export default Content;
