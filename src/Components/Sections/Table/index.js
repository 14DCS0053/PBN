import {useState,useEffect} from 'react';
import { TableFilterOption } from '../../../constants';
import {
       get_grouped_tableData_by_IdType_and_date,
       get_table_id_type_value
    } from '../../../utility';
import TableFilters from '../../Tabs/Tabs';
import './index.css';
import ScrollAbleContainer from '../../ScrollAbleContainer';

const TableSection = ()=>{
    const [activeTableFilter,setActiveTableFilter] = useState(TableFilterOption[0]);
    const [tableData,setTableDate] = useState([]);

    const onClickTableFilter=(tab)=>{
        setActiveTableFilter(tab);
    }

    useEffect(()=>{
        const tableDataByIdTypeAndDate = get_grouped_tableData_by_IdType_and_date(activeTableFilter.value);
        setTableDate(tableDataByIdTypeAndDate);
    },[activeTableFilter.value]);

    return (
        <div className="section table-section card-type-section">
         <TableFilters
           onClickTab={onClickTableFilter}
           tabOptions={TableFilterOption}
           activeTab={activeTableFilter}
         />
         <ScrollAbleContainer>
          <TableUI 
            tableData={tableData} 
            selectedTableFilter={activeTableFilter}
          />
         </ScrollAbleContainer>
        </div>
    )
}
export default TableSection;




const TableUI = ({tableData,selectedTableFilter})=>{
    return <table>
        <tbody>
            <tr>
                <td>DATE</td>
                <td>{selectedTableFilter.name}</td>
                <td>Value</td>
            </tr>
            {tableData.map(tableRow=>(
                <tr>
                <td>{tableRow.date}</td>
                <td>{get_table_id_type_value(selectedTableFilter.value, tableRow[selectedTableFilter.value])}</td>
                <td>{tableRow.amount.toFixed(2)}</td>
                </tr>)
            )}
        </tbody>
    </table>
}