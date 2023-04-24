import "./tabs.css";
const Tabs = ({ tabeTitle,tabOptions = [], activeTab, onClickTab }) => {
  return (
    <div className="tab-container flex">
      {tabeTitle && 
        <div className="tab-title"> <b>{tabeTitle}</b></div>
      }
      <div className="flex">
        {tabOptions.map((tab) => (
          <div
            className={`tab pointer ${tab.value === activeTab.value ? "active" : ""}`}
            onClick={() => onClickTab(tab)}
          ><i class="fa fa-solid fa-xmark"></i>
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
