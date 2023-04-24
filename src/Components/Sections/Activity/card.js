import { actionFilterMap } from "../../../constants";
import { generate_avatar_data } from "../../../utility";
import './Css/card.css'
const Card = (props) => {
  const {cardData,isCardTypeAction, clickActions,showActionButton = true} = props;
  const patientName = cardData.patient_first_name? `${cardData.patient_first_name} ${cardData.patient_last_name}`:""
  return (
    <div className="card-item flex flex-vertical-center">
      <div className="flex">
        <UserAvatar name={patientName}/>
        <Details cardData={cardData}/>
      </div>
      {showActionButton && 
       <Actions 
         isCardTypeAction={isCardTypeAction}
         clickActions={clickActions} 
         id={cardData.id}
         />
      } 
    </div>
  );
};
export default Card;

const UserAvatar = ({name})=>{
  const {initials:userName,color} = generate_avatar_data(name);
  const avatarStyle = {backgroundColor:color}
  return (
    <div className="user-avatar flex flex-horizontal-center flex-vertical-center" style={avatarStyle}>
      {userName}
    </div>
  )
}


const Details=({cardData})=>{
 const getEventNameByEventType = (eventType) =>{
  for(let action in actionFilterMap) {
    const filterDetail = actionFilterMap[action];
    if(filterDetail?.filters?.includes(eventType)) return filterDetail;
  }
  return "NA"
 }
 const shortString=(str,length)=>{
   if(str && str.length>length) {
      return str.substring(0, length) + "..."
   }
  return str
 }
  const {text:eventTypeText,color='green'} = getEventNameByEventType(cardData.event_type);
  const firstName = cardData.patient_first_name;
  return (
    <div className="details">
      {eventTypeText && <div className="event-type" style={{backgroundColor:color}}>{eventTypeText}</div>}
      <h3> 
        {firstName && <b>{firstName}</b> }
        {shortString(cardData.sms_body,70) || <i className="no-description">Description not available</i>}
      </h3>
    </div>
  )
}

const Actions = ({id,isCardTypeAction,clickActions={}})=>{
 if(isCardTypeAction) {
  return(
  <div className="actions-button flex gap-10">
    <AcceptButton id={id} onClick={clickActions.onCompleteActionClick}/>
    <IgnoreButton id={id} onClick={clickActions.onIgnoreActionClick}/>
  </div>
  )
 }
 else {
  return <span className="dot"></span>
 }
}

const AcceptButton = ({id,onClick})=>{
  return (
    <div className="flex flex-horizontal-center flex-vertical-center pointer action-btn accept-btn" onClick={()=>onClick(id)}>
     <i class="fa fa-check"></i>
    </div>
  )
};

const IgnoreButton = ({id,onClick})=>{
  return (
    <div className="flex flex-horizontal-center flex-vertical-center pointer action-btn ignore-btn" onClick={()=>onClick(id)}>
      <i class="fa fa-times"></i>
    </div>
  )
};
