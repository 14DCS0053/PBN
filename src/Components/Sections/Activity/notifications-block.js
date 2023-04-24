import { useState } from "react";
import NotificationTab from "../../Tabs/Tabs";
import { NotificationsFilterOption } from "../../../constants";
import NotificationCards from "./notifications-card";

const NotificationsBlock = ({selectedActivityFilter}) => {
  const [activeNotificationFilter, setActiveNotificationFilter] = useState(NotificationsFilterOption[0]);
  const onClickNotificationsFilterTab = (tab) => {
    setActiveNotificationFilter(tab);
  };
  return (
    <div className="action-block">
    <NotificationTab
      onClickTab={onClickNotificationsFilterTab}
      tabOptions={NotificationsFilterOption}
      activeTab={activeNotificationFilter}
      tabeTitle="Notifications"
    />
     <NotificationCards 
      activeNotificationFilter={activeNotificationFilter.value}
      selectedActivityFilter={selectedActivityFilter}
     />
    </div>
  );
};
export default NotificationsBlock;
