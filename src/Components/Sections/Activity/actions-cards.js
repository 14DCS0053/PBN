import {useState,useMemo} from 'react';
import Card from './card';
import AllActionsData from './../../../data/actions.json';
import ScrollAbleContainer from './../../ScrollAbleContainer';
import {actionStatus} from './../../../constants';
const ActionsCards = ({activeActionFilter,selectedActivityFilter}) => {
  const [actionsData,setActionsData] = useState(AllActionsData);

  const getFilteredActionByActivityType = (allowedActivityTypes=[])=>{
    return AllActionsData.filter(data=>allowedActivityTypes.includes(data.event_type));
  }

  const getFilteredActionsByType = (key,value,data)=>{
     return data.filter(data=>data[key] === value);
  }
  const updateActionStatus=(actionItemId,newStatus)=>{
    const clickedActionIndex = AllActionsData.findIndex(action=>action.id == actionItemId);
    AllActionsData[clickedActionIndex].status = newStatus;
    setActionsData([...actionsData])
  }
  const onCompleteActionClick = (actionItemId)=>{
   updateActionStatus(actionItemId,actionStatus.COMPLETED);
  }
  const onIgnoreActionClick = (actionItemId)=>{
    updateActionStatus(actionItemId,actionStatus.IGNORED);
  }


  const actionDataFilteredByActivityAndStatus = useMemo(()=>{
    const filteredActionByActivityType = selectedActivityFilter.value == 'all' ? AllActionsData : getFilteredActionByActivityType(selectedActivityFilter.filters);
    const filteredActionsByStatusType = activeActionFilter == 'all' ? filteredActionByActivityType : getFilteredActionsByType('status',activeActionFilter,filteredActionByActivityType);
   return filteredActionsByStatusType;
},[activeActionFilter,selectedActivityFilter,actionsData]);

  const showActionButton = activeActionFilter === actionStatus.PENDING;
  const clickActions = {onCompleteActionClick,onIgnoreActionClick}
  return (
    <ScrollAbleContainer>
      {actionDataFilteredByActivityAndStatus.map(action=>(
        <Card 
          cardData={action}
          isCardTypeAction={true} 
          showActionButton={showActionButton} 
          clickActions={clickActions}/>
      ))}
    </ScrollAbleContainer>
  );
};
export default ActionsCards;
