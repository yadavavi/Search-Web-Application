import TableView from "../components/SearchResult/Sections/TableView";
import CheckBox from "../components/SearchResult/Sections/CheckBox.js";


const SearchResult = ({onFilterHandler, check, setCheck,recordList,params, setParams, entryAttr}) => {
  return (
    <div>
      <CheckBox
        onFilterHandler={onFilterHandler}
        check={check}
        setCheck={setCheck}
        params={params}
        setParams={setParams}
        entryAttr={entryAttr}
      />
      <TableView recordList={recordList} />
    </div>
  );
};

export default SearchResult;
