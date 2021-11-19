import TableView from "../components/SearchResult/Sections/TableView";
import CheckBox from "../components/SearchResult/Sections/CheckBox.js";


const SearchResult = ({onFilterHandler, check, setCheck,recordList, entryAttr}) => {
  return (
    <div>
      <CheckBox
        onFilterHandler={onFilterHandler}
        check={check}
        setCheck={setCheck}
        entryAttr={entryAttr}
      />
      <TableView recordList={recordList} />
    </div>
  );
};

export default SearchResult;
