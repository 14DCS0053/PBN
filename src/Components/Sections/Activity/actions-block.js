import { useState } from "react";
import ActionsTab from "../../Tabs/Tabs";
import { ActionsFilterOPtions } from "../../../constants";
import ActionsCards from "./actions-cards";

const ActionsBlock = ({selectedActivityFilter}) => {
  const [activeActionFilter, setActiveActionFilter] = useState(ActionsFilterOPtions[0]);
  const onClickActionsFilterTab = (tab) => {
    setActiveActionFilter(tab);
  };
  return (
    <div className="action-block">
      <ActionsTab
        onClickTab={onClickActionsFilterTab}
        tabOptions={ActionsFilterOPtions}
        activeTab={activeActionFilter}
        tabeTitle="Action Needed"
      />
      <ActionsCards activeActionFilter={activeActionFilter.value} selectedActivityFilter={selectedActivityFilter}/>
    </div>
  );
};
export default ActionsBlock;
