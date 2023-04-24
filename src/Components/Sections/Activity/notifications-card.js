import {useState,useEffect,useMemo} from 'react';
import Card from './card';
import AllNotificationsData from './../../../data/notifications.json';
import ScrollAbleContainer from './../../ScrollAbleContainer';
const NotificationCards = ({activeNotificationFilter,selectedActivityFilter}) => {

  const getFilteredNotificationByActivityType = (allowedActivityTypes=[])=>{
    return AllNotificationsData.filter(data=>allowedActivityTypes.includes(data.event_type));
  }

  const getFilteredNotificationsByType = (key,value,data)=>{
    return data.filter(data=>data[key] === value);
  }
  const notificationDataFilteredByActivityAndStatus = useMemo(()=>{
    const filteredNotificationByActivityType = selectedActivityFilter.value == 'all' ? AllNotificationsData : getFilteredNotificationByActivityType(selectedActivityFilter.filters);
    const filteredNotificationsByStatusType = activeNotificationFilter == 'all' ? filteredNotificationByActivityType : getFilteredNotificationsByType('status',activeNotificationFilter,filteredNotificationByActivityType);
    return filteredNotificationsByStatusType;
},[activeNotificationFilter,selectedActivityFilter]);

  return (
    <ScrollAbleContainer>
     {notificationDataFilteredByActivityAndStatus.map(notification=>(
       <Card 
        cardData={notification} 
        isCardTypeAction={false}
       />
     ))}
    </ScrollAbleContainer>
  );
};
export default NotificationCards;
