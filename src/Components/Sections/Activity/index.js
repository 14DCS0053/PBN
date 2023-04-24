import React, { useState } from "react";
import ActivityFilter from "./activity-filter";
import ActionsBlock from "./actions-block";
import NotificationsBlock from "./notifications-block";
import "./Css/index.css";
const ActivitySection = () => {
  const [selectedActivityFilter, updateSelectedActivityFilter] = useState({value:'all'})
  const onClickActivityFilter = (Clickedfilter) => {
    updateSelectedActivityFilter(Clickedfilter);
  };
  return (
   <div className="section">
    <h1 className="sectionHeading"> Activity</h1>
     <div className="section card-type-section activity-section flex gap-10">
      <ActivityFilter
        selectedActivityFilter={selectedActivityFilter}
        onClickActivityFilter={onClickActivityFilter}
      />
      <div className="action-notification-block flex">
        <ActionsBlock selectedActivityFilter={selectedActivityFilter} />
        <NotificationsBlock selectedActivityFilter={selectedActivityFilter} />
      </div>
    </div>
   </div>
  );
};
export default ActivitySection;
