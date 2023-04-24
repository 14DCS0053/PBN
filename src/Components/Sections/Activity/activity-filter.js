import { filterActivityOptions } from "../../../constants";
import "./Css/activity-filter.css";
const ActivityFilter = ({ selectedActivityFilter, onClickActivityFilter }) => {
  return (
    <div className="activity-filter-block">
      <FilterTitle/>
      <SelectAll selectedFilter={selectedActivityFilter} onClick={onClickActivityFilter}/>
      {filterActivityOptions.map((filter) => (
        <FilterButton
         filter={filter}
         onFilterClick={onClickActivityFilter}
         selectedFilter={selectedActivityFilter}
        />
      ))}
    </div>
  );
};

const FilterButton = ({ selectedFilter,filter, onFilterClick }) => {
  const filterColor = filter.color || "red";
  return (
    <div
      className={`filter-card flex flex-vertical-center pointer ${selectedFilter.value?.toUpperCase() === filter.value ? 'active' : ''}`}
      onClick={() => onFilterClick(filter)}
    >
      <span
        className="filter-color"
        style={{ backgroundColor: filterColor }}
      />
      {filter.label}
    </div>
  );
};

const SelectAll = ({selectedFilter,onClick})=>{
  return (
    <button onClick={()=>onClick({value:'all',filters:[]})} className={`select-all-activity-btn ${selectedFilter.value === 'all'? 'active': ''}`}>
        Select All
    </button>
  )
}
const FilterTitle = ()=>{
  return (
    <div className="flex flex-vertical-center activity-filter-header gap-10">
      <i class="fa fa-filter"></i>
      <div><b>Filter Activity</b></div>
    </div>
  )
}

export default ActivityFilter;
